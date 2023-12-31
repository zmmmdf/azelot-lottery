from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')  

@app.route('/about')
def about():
    return render_template('about.html') 

@app.route('/contact')
def contact():
    return render_template('contact.html')  

@app.route('/help')
def help():
    return render_template('help.html') 
 
@app.route('/banks/transfers')
def banks():
    return render_template('banks.html')
  
@app.route('/banks/help/<panel_type>')
def show_panel(panel_type):
    if panel_type not in ['m10','eManat','Milliön']:
        panel_type = 'm10'
    return render_template('bankhelp.html', panel_type=panel_type)

if __name__ == '__main__':
    app.run(debug=True)
