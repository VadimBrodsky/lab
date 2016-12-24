require 'socket'

# Rack like data structure
app = Proc.new do
  ['200', {'Content-Type' => 'text/html'}, ["Hello world! The time is #{Time.now}"]]
end

server = TCPServer.new 5678

while session = server.accept
  request = session.gets
  puts request

  status, headers, body = app.call({})

  session.print "HTTP/1.1 #{status}\r\n"  # Status line and response code

  headers.each do |key, value|            # Headers
    session.print "#{key}: #{value}\r\n"
  end

  session.print "\r\n"                    # Newline

  body.each do |part|                     # Body of the response
    session.print part
  end

  session.close
end
