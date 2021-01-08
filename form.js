class Form{
    constructor(){
        this.greeting=createElement('h2')
        this.input=createInput("")
        this.input.style('width','160px')
        this.email=createInput("")
        this.email.style('width','160px')
        this.button=createButton('submit')
        this.title=createElement('h2')
        this.name=createElement('h4')
        this.emailInput=createElement('h4')
        this.reset=createButton('reset')

        this.button.style('width','100px')
        this.button.style('height','40px')
        this.button.style('background','blue')

        this.reset.style('width','100px')
        this.reset.style('height','40px')
        this.reset.style('background','blue')

        

        this.ques1=createElement('h3',"1.do u like street food?")
        this.radio1=createRadio('h3')
        this.radio1.option('YES')
        this.radio1.option('NO')
        this.radio1.style('width','140px')

        this.ques2=createElement('h3',"2.do like listening to music?")
        this.radio2=createRadio('h3')
        this.radio2.option('YES')
        this.radio2.option('NO')
        this.radio2.style('width','140px')

        this.ques3=createElement('h3',"3.do u like to watch bolywood movies?")
        this.radio3=createRadio('h3')
        this.radio3.option('YES')
        this.radio3.option('NO')
        this.radio3.style('width','140px')

        this.ques4=createElement('h3',"4.do u like talking to friends?")
        this.radio4=createRadio('h3')
        this.radio4.option('YES')
        this.radio4.option('NO')
        this.radio4.style('width','140px')

        this.ques5=createElement('h3',"5.do u have a pet?")
        this.radio5=createRadio('h3')
        this.radio5.option('YES')
        this.radio5.option('NO')
        this.radio5.style('width','140px')

        this.description=createInput("Please add your comments here")
        this.description.style('width','520px')   
        this.description.style('height','50px')
    

    
    }
    display(){
        this.title.html("Survey Form")
        this.title.position(displayWidth/2+50,20)
        this.name.html("Name")
        this.name.position(displayWidth/2,125)
        this.input.position(displayWidth/2+100,145)
        this.emailInput.html("EMail")
        this.emailInput.position(displayWidth/2,200)
        this.email.position(displayWidth/2+100,220)
        this.button.position(displayWidth/2+100,displayHeight-140)
        this.reset.position(displayWidth/2+300,displayHeight-140)

        this.ques1.position(displayWidth/2-100,300)
        this.radio1.position(displayWidth/2+300,320)
        this.ques2.position(displayWidth/2-100,400)
        this.radio2.position(displayWidth/2+300,420)
        this.ques3.position(displayWidth/2-100,500)
        this.radio3.position(displayWidth/2+300,520)
        this.ques4.position(displayWidth/2-100,600)
        this.radio4.position(displayWidth/2+300,620)
        this.ques5.position(displayWidth/2-100,700)
        this.radio5.position(displayWidth/2+300,720)

        this.description.position(displayWidth/2-100,810)
        this.description.style('color','red')
        this.description.style('fontSize','20px')

        this.button.position(displayWidth/2+100,1000)
        this.reset.position(displayWidth/2+500,50)
        this.button.mousePressed(()=>{
            this.greeting.show()
            this.description.hide()
            this.greeting.html("Thanks for attempting the form!")
            this.greeting.position(displayWidth/2-30,810)
            user.input=this.input.value()
            user.email=this.email.value()
            user.radio1=this.radio1.value()
            user.radio2=this.radio2.value()
            user.radio3=this.radio3.value()
            user.radio4=this.radio4.value()
            user.radio5=this.radio5.value()
            Count+=1
            user.index=Count
            user.update()
            user.updateCount(Count)
        })
    }
}