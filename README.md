# Upcoming Events App

This application allows you to view upcoming events for an artist or band by entering their name in the URL. It fetches data from the Bandsintown API and displays the upcoming events accordingly. Please follow the instructions below to run this application locally.

## Setup:

1. Clone this repository onto your local machine
    - Copy the download link and run `git clone *download link*` in your terminal
    - i.e. `git clone https://github.com/kcirekcom/upcoming-events-app.git`

2. Run `npm i` to install all of the necessary dependencies from the package.json file

3. Run the `npm run start` script and the application will compile and automatically open in your browser on localhost:8080.

## Use:

You must enter the following URL structure:

- localhost:8080/?artist=Maroon 5
  - Spaces are ok as the application encodes the URI after you enter the artist's name
