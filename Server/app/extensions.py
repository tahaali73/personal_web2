from flask_cors import CORS
from twilio.rest import Client

cors = CORS()
from config import Config
client = Client(Config.account_sid,Config.auth_token)