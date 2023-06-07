# Name: Marcello Borges
# Class: CS 361
# Filename: microServSend.py
# Description: Implementation of microservice send

# client side

import zmq
import microServReceive

context = zmq.Context()

socket = context.socket(zmq.REQ)
socket.connect("tcp://localhost:5555")

requests = ['Lebron', '5']

socket.send_string(requests[0] + "," + requests[1])
list_of_links = socket.recv_json()

file_path = "image_links.txt"

with open(file_path, "w") as file:
    for link in list_of_links:
        file.write(link + "\n")

print("Image links have been written to", file_path)
