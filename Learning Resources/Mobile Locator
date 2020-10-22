For locating mobile, Seeker is used for finding the geolocation of any mobile number with high accuracy.
It's developed by thewhiteh4t.
Seeker host phishing pages to get credentials. It host a fake page that requests user's location like many popular location based websites.
Seeker hosts a fake website on In Built PHP Server and uses Serveo to generate a link which is forwarded to the target, website asks for Location Permission and if the target allows it, we can get :
    Longitude
    Latitude
    Accuracy
    Altitude - Not always available
    Direction - Only available if user is moving
    Speed - Only available if user is moving

Its tested on
    Kali Linux
    BlackArch Linux
    Ubuntu
    Kali Nethunter
    Termux
    Parrot OS

Installation
    Kali Linux / Ubuntu / Parrot OS
        git clone https://github.com/thewhiteh4t/seeker.git
        cd seeker/
        chmod 777 install.sh
        ./install.sh
    BlackArch Linux
        pacman -S seeker
    Docker
        docker pull thewhiteh4t/seeker
    Termux
        git clone https://github.com/thewhiteh4t/seeker.git
        cd seeker/
        chmod 777 termux_install.sh
        ./termux_install.sh
Usage
    python3 seeker.py -h

    usage: seeker.py [-h] [-s SUBDOMAIN]

    optional arguments:
      -h, --help                              show this help message and exit
      -s SUBDOMAIN, --subdomain Subdomain 	  Provide Subdomain for Serveo URL ( Optional )
      -k KML, --kml KML                       Provide KML Filename ( Optional )
      -t TUNNEL, --tunnel TUNNEL              Specify Tunnel Mode [manual]

    # Example

    # SERVEO
    ########
    python3 seeker.py

    # NGROK ETC.
    ############

    # In First Terminal Start seeker in Manual mode like this
    python3 seeker.py -t manual

    # In Second Terminal Start Ngrok or any other tunnel service on port 8080
    ./ngrok http 8080

    #-----------------------------------#

    # Subdomain
    ###########
    python3 seeker.py --subdomain google
    python3 seeker.py --tunnel manual --subdomain zomato

    #-----------------------------------#

    # Docker Usage
    ##############

    # SERVEO
    ########
    docker run -t --rm thewhiteh4t/seeker

    # NGROK
    #######

    # Step 1
    docker network create ngroknet

    # Step 2
    docker run --rm -t --net ngroknet --name seeker thewhiteh4t/seeker python3 seeker.py -t manual

    # Step 3
    docker run --rm -t --net ngroknet --name ngrok wernight/ngrok ngrok http seeker:8080