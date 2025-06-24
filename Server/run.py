from app import create_app

app = create_app()
if __name__ == 'run':
    app.debug = True
