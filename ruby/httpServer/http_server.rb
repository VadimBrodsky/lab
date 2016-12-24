require 'socket'
server = TCPServer.new 5678

while session = server.accept
  request = session.gets
  puts request

  session.print "HTTP/1.1 200\r\n"             # Status line and response code
  session.print "Content-Type: text/html\r\n"  # Header that response is html
  session.print "\r\n"                         # Newline
  session.print "Hello world! The time is #{Time.now}"  # Body of the response

  session.close
end
