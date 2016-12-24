require 'socket'
client = TCPSocket.new 'localhost', 5678

# client connects to the server, gets information from the server
# prints it out and closes connection
while line = client.gets
  puts line
end

client.close
