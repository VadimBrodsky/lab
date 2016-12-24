require 'socket'
require 'rack'
require 'rack/lobster'

app = Rack::Lobster.new
server = TCPServer.new 5678

while session = server.accept
  request = session.gets
  puts request

  # GET /?flip=left HTTP/1.1\r\n
  method, full_path = request.split(' ')  # Parse the request
  path, query = full_path.split('?')

  # Pass the request parameters to Rack
  status, headers, body = app.call({
    'REQUEST_METHOD' => method,           # 'GET'
    'PATH_INFO' => path,                  # '/'
    'QUERY_STRING' => query               # '?flip=left'
  })

  # Send the response
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
