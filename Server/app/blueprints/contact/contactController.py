from flask import Blueprint, jsonify, request
from app.blueprints.contact.contatctModel import contactModel

contactBp = Blueprint('contactBp',__name__)
contact_model = contactModel()

@contactBp.route('/api/contact/sendmessage', endpoint='sendmessage', methods=['POST'])
def contact():
    data = request.get_json()
    return contact_model.sendmessage(data=data)