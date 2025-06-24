from flask import Blueprint, request
from app.blueprints.chatBot.chatBotModel import chatBot

chat_blueprint = Blueprint('chat', __name__)

@chat_blueprint.route("/api/chat", methods=["POST"])
def chat():
    data = request.get_json()
    question = data.get("question", "")
    return chatBot().chat_Bot(question)
