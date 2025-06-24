from flask import jsonify
from app.extensions import client
from config import Config

class contactModel():
    
    def create_message(self, data):
        name = f"{data['firstName']}{' ' + data['lastName'] if data.get('lastName') else ''}"
        options = [key.split('-')[1] for key, value in data.items() if key.startswith('option-') and value]
        options = [option.capitalize() for option in options]
        options = ', '.join(options)
        if not options:
            options = 'None'
        contacts = []
        if data.get('whatsappContact'):
            contacts.append(f"WhatsApp: {data.get('whatsappNumber', '')}")
        if data.get('emailContact'):
            contacts.append(f"Email: {data.get('email', '') or 'Not provided'}")
        contact_info = '\n'.join(contacts)
        message = data['message']

        template = f"""
    From: {name}
    Options selected: {options}
    {contact_info}
    Msg: {message}
    """

        return template
    
    def sendmessage(self, data):
    
        msg = self.create_message(data)
        message = client.messages.create(
            from_=Config.sending_no,
            body=msg,
            to=Config.recieving_no
        )
        print(message.sid)
        return jsonify({"msg": "success"}), 200
    
        