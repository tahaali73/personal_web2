from flask import Flask
from app.blueprints.contact import contactBp  
from app.blueprints.chatBot import chat_blueprint
from config import Config
from .extensions import cors

#from app.extensions import 


def create_app():
    app = Flask(__name__)
    
    # configurations
    app.config.from_object(Config)
    
    
    # Register blueprints
    app.register_blueprint(contactBp)
    app.register_blueprint(chat_blueprint)

    
    # EXtensions
    #crf.init_app(app)
    cors.init_app(app,resources={r"/api/*":{ "origins":['http://localhost:5173']}})
    
    
    return app