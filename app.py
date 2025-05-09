from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/download_resume')
def download_resume():
    return send_from_directory('static/pdf', 'Rehan_CV.pdf', as_attachment=True)

@app.route('/view_certificates')
def view_certificates():
    return send_from_directory('static/pdf', 'certificates.pdf')

if __name__ == '__main__':
    app.run(debug=True)
