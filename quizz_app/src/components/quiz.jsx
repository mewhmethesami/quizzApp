
import './quiz.css'
import React from 'react'

export default class Quiz extends React.Component {
    constructor(props){
        super(props)
        this.state={
            qustions:
            [
            {
                questionText:"what is the capital of France ?",
                answerOptions:[
                {answertext:"New York",inCorrct:false},
                {answertext:"London",inCorrct:false},
                {answertext:"Paris",inCorrct:true},
                {answertext:"Dublin",inCorrct:false},
                    
                ],
            },
            {
                questionText:"who is ceo of Tesla?",
                answerOptions:[
                {answertext:"Jeff Bezos",inCorrct:false},
                {answertext:"Elon Mask",inCorrct:true},
                {answertext:"Bill Gates",inCorrct:false},
                {answertext:"Tony Stark",inCorrct:false},
                ],
            },
            {
                questionText:"what is the capital of Iran ?",
                answerOptions:[
                {answertext:"Tehran",inCorrct:true},
                {answertext:"Tabriz",inCorrct:false},
                {answertext:"Shiraz",inCorrct:false},
                {answertext:"Mashhad",inCorrct:false},
                ],
            },
            {
                questionText:"How many harry potter books are there",
                answerOptions:[
                {answertext:"1",inCorrct:false},
                {answertext:"2",inCorrct:false},
                {answertext:"3",inCorrct:false},
                {answertext:"4",inCorrct:true},
                ],
            },
        ],
        currentQusetion:0,
        showScore:false,
        score:0
        }
    }

    clickHandler(isCorrect){
        if(isCorrect){
            this.setState(prevState=>{
                return{
                    score:prevState.score+1
                }
            })
        }
        if(this.state.currentQusetion===3){
            this.setState({showScore:true})
        }
        else{
            this.setState(prevState=>{
                return{
                    currentQusetion:prevState.currentQusetion+1
                }
            })
        }

    }
  render() {
    return (
        <>
    
        {this.state.showScore?
        alert("count of correct answer"+this.state.score):
        
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            <h2>{this.state.qustions[this.state.currentQusetion].questionText}</h2>
                {this.state.qustions[this.state.currentQusetion].answerOptions.map(answer=>(
                    <button onClick={this.clickHandler.bind(this,answer.inCorrct)}>{answer.answertext}</button>
                ))}
            <div className='index'>Question {this.state.currentQusetion+1}of {this.state.qustions.length}</div>
        </div>
        
    }
    </>
    
    
    )
  }
}

