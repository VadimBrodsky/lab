require 'socket'

# creates a new TCP server at port 5678
server = TCPServer.new 5678

# waits for a client to connect, sends a message then closes the connection
while session = server.accept
  session.puts "Hello world! The time is #{Time.now}"
  session.close
end
