
var questions = [
    ["The major language of world wide web is ?","HTML" ,"PHP","JAVA","A"],
    ["LAN is an abbreviation for ?","Local Area Network","Large area network","Local access network","A"],
    ["URL is an abbreviation for ?" ,"Universal Resource Locator","Uniform Resource Locator","Universal Resource Location","B"],
    ["FTP is an abbreviation for ?","File transfer position","File transfer protocol","File transfer possibility","B"],
    ["A virus that replicates itself is ?","Bug","Worm","Hoax","B"]
] ;
var  position = 0, correct = 0 , choice ,per;

var createQuiz = React.createClass({

     getInitialState: function(){
         return{
             correct: this.props.correct,
             position: this.props.position,
             question: this.props.data[position][0],
             opt1: this.props.data[position][1],
             opt2: this.props.data[position][2],
             opt3: this.props.data[position][3],
             ans: this.props.data[position][4],
         }
     },
  
     checkResponse: function(e){
          choices = document.getElementsByName('answer');
          console.log(choices);
          for (var i = 0; i < choices.length; i++) {
          if(choices[i].checked){
              choice = choices[i].value;
          }
       }
            if(choice == this.props.data[position][4]){
                this.setState({
                    correct: correct++,
                })
                
            }
          this.setState({
            position: ++position,
          }) 
          if(position < this.props.data.length){
              this.setState({
               
             question: this.props.data[position][0],
             opt1: this.props.data[position][1],
             opt2: this.props.data[position][2],
             opt3: this.props.data[position][3],
             ans: this.props.data[position][4],
            
        })
          }
     },

     askQuestion: function(){    
            if(this.state.position >= this.props.data.length){
               per = correct*20;
              return React.DOM.div(
                    {
                        id:'complete'
                    },
                    React.DOM.span({className:'resultBox'},
                      React.DOM.h2({className:"text-center"}, "Percentage:"),
                      React.DOM.h2({className:"text-center"}, per + ' %')
                      ),
                     React.DOM.span({className:'resultBox'},
                      React.DOM.h2({className:"text-center"}, "Correct Answer:"),
                      React.DOM.h2({className:"text-center"}, correct)
                      )
                 )
             } else {
                 return  React.DOM.div(null,
                          React.DOM.div(
                             {
                                 id:'status'
                             },
                            React.DOM.h1({className:"text-center"},"Question: "+ (this.state.position+1) +" OF " +this.props.data.length )
                          ),
                         React.DOM.h3({style:{marginLeft:"1.5em"}},
                             "Question."+(this.state.position+1)+":"+this.state.question),
                         React.DOM.div({
                             style:{fontSize:"18px", marginLeft:"2em"}},
                             React.DOM.input(
                                 {
                                    type: "radio",
                                    className:'optionBtn',
                                    name: 'answer',
                                    value:'A'
                                 }
                             ),
                              this.state.opt1,
                              React.DOM.br(null),
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    className:'optionBtn',
                                    name: 'answer',
                                    value:'B'                          
                             }
                
                             ),
                             this.state.opt2,
                             React.DOM.br(null),
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    className:'optionBtn',
                                    name: 'answer',
                                    value:'C'
                                 }
                             ),
                             this.state.opt3
                         ),
                         React.DOM.button(
                                 {
                                     
                                   style:{marginLeft:"50%"},
                                    id:'nextBtn', 
                                    type: "button",
                                    className:"btn btn-info",
                                    onClick: this.checkResponse
                                 },
                                 'NEXT'
                             )
                     );
             }
         
                 
     },
     _footer: function(){
    return React.DOM.div({className:"panel-footer navbar-fixed-bottom text-center" }, "Copyrights: Sohaib Majeed");
},
     render: function(){
         return React.DOM.div(
             null,
             React.DOM.div( 
                    {
                    className:"panel-heading bg-primary",
                    id: 'header'
                    },
                    React.DOM.h1({className:"text-center"},"Quiz App React")
             ),
             React.DOM.div(
                 null,
                
                 React.DOM.div(
                     {
                        id:'test'
                     },
                     this.askQuestion(),
                     this._footer() 

                  )  
             )
         )
     }
});
ReactDOM.render(
    React.DOM.div(null,
       React.createElement(createQuiz,
       {
           data: questions,
           position: position,
           correct: correct,
       }
       )
    ),
    document.getElementById('app')
);
