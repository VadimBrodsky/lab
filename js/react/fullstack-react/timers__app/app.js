class TimersDashboard extends React.Component {
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: uuid.v4(),
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuid.v4(),
        elapsed: 1273998,
        runningSince: null,
      },
    ],
  };

  handleCreateFormSubmit = (timer) => { this.createTimer(timer); };
  handleEditFormSubmit = (attrs) => { this.updateTimer(attrs); };

  createTimer = (timer) => {
    const t = helpers.newTimer(timer);
    this.setState({ timers: this.state.timers.concat(t) });
  }
  updateTimer = (attrs) => {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        } else {
          return timer;
        }
      }),
    });
  };

  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList timers={this.state.timers} onFormSubmit={this.handleEditFormSubmit} />
          <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
        </div>
      </div>
    );
  };
}

class EditableTimerList extends React.Component {
  render() {
    const timers = this.props.timers.map((timer) => (
      <EditableTimer 
        key={timer.id} 
        id={timer.id} 
        title={timer.title} 
        project={timer.project} 
        elasped={timer.elapsed} 
        runningSince={timer.runnigSince} 
        onFormSubmit={this.props.onFormSubmit}
      />
    ));
    return (
      <div id='timers'>{timers}</div>
    );
  };
}

class EditableTimer extends React.Component {
  state = { editFormOpen: false };
  handleEditClick = () => { this.openForm() };
  handleFormClose = () => { this.closeForm() };
  handleSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.closeForm();
  };
  closeForm = () => { this.setState({ editFormOpen: false }); };
  openForm = () => { this.setState({ editFormOpen: true }); };
  render() {
    if (this.state.editFormOpen) {
      return (
        <TimerForm 
          id={this.props.id} 
          title={this.props.title} 
          project={this.props.project} 
          onFormSubmit={this.handleSubmit} 
          onFormClose={this.handleFormClose} 
        />
      );
    } else {
      return (
        <Timer 
          id={this.props.id} 
          title={this.props.title} 
          project={this.props.project} 
          elapsed={this.props.elasped} 
          runningSince={this.props.runningSince} 
          onEditClick={this.handleEditClick}
        />
      );
    }
  };
}

class TimerForm extends React.Component {
  state = {
    title: this.props.title || '',
    project: this.props.project || '',
  };
  handleTitleChange = (e) => { this.setState({ title: e.target.value }); };
  handleProjectChange = (e) => { this.setState({ project: e.target.value }); };
  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project,
    });
  };

  render() {
    const submitText = this.props.id ? 'Update' : 'Create';
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Title</label>
              <input type='text' defaultValue={this.state.title} onChange={this.handleTitleChange} />
            </div>
            <div className='field'>
              <label>Project</label>
              <input type='text' defaultValue={this.state.project} onChange={this.handleProjectChange} />
            </div>
            <div className='ui two bottom attached buttons'>
              <button className='ui basic blue button' onClick={this.handleSubmit}>{submitText}</button>
              <button className='ui basic red button' onClick={this.props.onFormClose}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

class ToggleableTimerForm extends React.Component {
  state = { isOpen: false };
  handleFormOpen = () => { this.setState({ isOpen: true }); };
  handleFormClose = () => { this.setState({ isOpen: false }); };
  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.setState({ isOpen: false });
  }
  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm onFormSubmit={this.handleFormSubmit} onFormClose={this.HandleFormClose} />
      );
    } else {
      return (
        <div className='ui basic content center aligned segment'>
          <button className='ui basic button icon' onClick={this.handleFormOpen}>
            <i className='plus icon' />
          </button>
        </div>
      );
    }
  };
}

class Timer extends React.Component {
  render() {
    const elapsedString = helpers.renderElapsedString(this.props.elapsed);
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>{this.props.title}</div>
          <div className='meta'>{this.props.project}</div>
          <div className='center aligned description'>
            <h2>{elapsedString}</h2>
          </div>
          <div className='extra content'>
            <span className='right floated edit icon'>
              <i className='edit icon' onClick={this.props.onEditClick} />
            </span>
            <span className='right floated trash icon'>
              <i className='trash icon' />
            </span>
          </div>
        </div>
        <div className='ui bottom attached blue basic button'>Start</div>
      </div>
    );
  };
}

const helpers = {
  newTimer(attrs = {}) {
    return {
      title: attrs.title || 'Timer',
      project: attrs.project || 'Project',
      id: uuid.v4(),
      elapsed: 0,
    };
  },
  findById(array, id, cb) {
    array.forEach((el) => {
      if (el.id === id) {
        cb(el);
        return;
      }
    });
  },
  renderElapsedString(elapsed, runningSince) {
    let totalElapsed = elapsed;
    if (runningSince) {
      totalElapsed += Date.now() - runningSince;
    }
    return helpers.millisecondsToHuman(totalElapsed);
  },
  millisecondsToHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor((ms / 1000 / 60 / 60));
    return [
      helpers.pad(hours.toString(), 2),
      helpers.pad(minutes.toString(), 2),
      helpers.pad(seconds.toString(), 2),
    ].join(':');
  },
  pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) {
      padded = `0${padded}`;
    }
    return padded;
  },
};

ReactDOM.render(
  <TimersDashboard />,
  document.getElementById('content')
);