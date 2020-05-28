from flask import Flask , request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS 
from flask import jsonify

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres+psycopg2://postgres:ashik@123@localhost:5432/Sample'
CORS(app)
db = SQLAlchemy(app)


class ContactInfo(db.Model):
   __tablename__ = 'ContactInfo'
   id = db.Column(db.Integer,primary_key = True)
   FirstName = db.Column(db.String)
   LastName = db.Column(db.String)
   Dob = db.Column(db.String)
   Email = db.Column(db.String)
   Gender = db.Column(db.String)
   Phonenumber = db.Column(db.String)

   def __init__(self , FirstName,LastName,Dob,Email,Gender,Phonenumber):
      self.FirstName = FirstName
      self.LastName = LastName
      self.Dob = Dob
      self.Email = Email
      self.Gender = Gender
      self.Phonenumber = Phonenumber

@app.route('/contact', methods = ['POST'])
def post_Contactinfo():
   data = request.get_json()
   FirstName = data["FirstName"]
   LastName = data["LastName"]
   Dob = data["Dob"]
   Email = data["Email"]
   Gender = data["Gender"]
   Phonenumber = data["Phonenumber"]
   cs = ContactInfo(FirstName,LastName,Dob,Email,Gender,Phonenumber)
   db.session.add(cs)
   db.session.commit()
   return jsonify(msg = "Data is created "),201

@app.route('/contact')  
def get_ContactInfo():
   contact_info = ContactInfo.query.all()
   conList = []
   for con in contact_info:
      c = {}
      c["FirstName"] = con.FirstName
      c["LastName"] = con.LastName
      c["Dob"] = con.Dob
      c["Email"] = con.Email
      c["Gender"] = con.Gender
      c["Phonenumber"] = con.Phonenumber
      conList.append(c)
   return jsonify(list = conList)



@app.route('/test')   
def hello_world():
   return 'Hello World'

if __name__ == '__main__':
   db.create_all()
   app.run(debug = True)