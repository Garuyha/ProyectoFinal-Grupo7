import React from 'react';
import palabras from './palabras.json';
import { ReactDOM } from 'react';
import { render } from 'react-dom';



function WordGame(){
    render(

       
      
       

        (function() {
            'use strict';
            
            var Game = React.createClass({
                
                render: function() {
                    return (
                      <div className="row">
                        <div className="col-md-8">
                          <h3>Crossword</h3>
                          <Puzzle />
                        </div>
                        <div className="col-md-4">
                          <h2>Clues</h2>
                          <Clues data={this.props.data} />
                        </div>
                      </div>
                    );
                }
            });
            
            var Clues = React.createClass({
                render: function() {
                    var statements = this.props.data.map(function(clues) {
                        return (
                          <Output clue={clues.clue}></Output>
                        );
                    });
                    return (
                      <div className="clueList">
                      {statements}
                      </div>
                    );
                }
            });
            
            var tdStyles = {
                backgroundColor: 'black'
            };
        
            var Puzzle = React.createClass({
                render: function() {
                    return (


                        
                      <table className="puzzle">
                        <tr className="row0">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3" style={tdStyles}></td>
                          <td className="cell cell4" style={tdStyles}></td>
                          <td className="cell cell5" style={tdStyles}></td>
                          <td className="cell cell6" style={tdStyles}></td>
                          <td className="cell cell7" style={tdStyles}></td>
                          <td className="cell cell8" style={tdStyles}></td>
                          <td className="cell cell9" style={tdStyles}></td>
                          <td className="cell cell10" style={tdStyles}></td>
                          <td className="cell cell11" style={tdStyles}></td>
                          <td className="cell cell12" style={tdStyles}></td>
                          <td className="cell cell13" style={tdStyles}></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16"><input type="text" ref="answer0016" placeholder="1" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row1">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3" style={tdStyles}></td>
                          <td className="cell cell4" style={tdStyles}></td>
                          <td className="cell cell5" style={tdStyles}></td>
                          <td className="cell cell6" style={tdStyles}></td>
                          <td className="cell cell7" style={tdStyles}></td>
                          <td className="cell cell8" style={tdStyles}></td>
                          <td className="cell cell9" style={tdStyles}></td>
                          <td className="cell cell10" style={tdStyles}></td>
                          <td className="cell cell11" style={tdStyles}></td>
                          <td className="cell cell12" style={tdStyles}></td>
                          <td className="cell cell13" style={tdStyles}></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16"><input type="text" ref="answer0116" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row2">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3" style={tdStyles}></td>
                          <td className="cell cell4" style={tdStyles}></td>
                          <td className="cell cell5" style={tdStyles}></td>
                          <td className="cell cell6" style={tdStyles}></td>
                          <td className="cell cell7" style={tdStyles}></td>
                          <td className="cell cell8" style={tdStyles}></td>
                          <td className="cell cell9" style={tdStyles}></td>
                          <td className="cell cell10" style={tdStyles}></td>
                          <td className="cell cell11" style={tdStyles}></td>
                          <td className="cell cell12" style={tdStyles}></td>
                          <td className="cell cell13" style={tdStyles}></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16"><input type="text" ref="answer0216" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row3">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3" style={tdStyles}></td>
                          <td className="cell cell4" style={tdStyles}></td>
                          <td className="cell cell5" style={tdStyles}></td>
                          <td className="cell cell6" style={tdStyles}></td>
                          <td className="cell cell7" style={tdStyles}></td>
                          <td className="cell cell8" style={tdStyles}></td>
                          <td className="cell cell9" style={tdStyles}></td>
                          <td className="cell cell10" style={tdStyles}></td>
                          <td className="cell cell11"><input type="text" ref="answer0311" placeholder="2" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell12" style={tdStyles}></td>
                          <td className="cell cell13" style={tdStyles}></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16"><input type="text" ref="answer0316" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row4">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3" style={tdStyles}></td>
                          <td className="cell cell4" style={tdStyles}></td>
                          <td className="cell cell5" style={tdStyles}></td>
                          <td className="cell cell6" style={tdStyles}></td>
                          <td className="cell cell7" style={tdStyles}></td>
                          <td className="cell cell8" style={tdStyles}></td>
                          <td className="cell cell9" style={tdStyles}></td>
                          <td className="cell cell10" style={tdStyles}></td>
                          <td className="cell cell11"><input type="text" ref="answer0411" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell12" style={tdStyles}></td>
                          <td className="cell cell13" style={tdStyles}></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16"><input type="text" ref="answer0416" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row5">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3"><input type="text" ref="answer0503" placeholder="3" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell4" style={tdStyles}></td>
                          <td className="cell cell5" style={tdStyles}></td>
                          <td className="cell cell6" style={tdStyles}></td>
                          <td className="cell cell7" style={tdStyles}></td>
                          <td className="cell cell8" style={tdStyles}></td>
                          <td className="cell cell9" style={tdStyles}></td>
                          <td className="cell cell10" style={tdStyles}></td>
                          <td className="cell cell11"><input type="text" ref="answer0511" placeholder="4" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell12"><input type="text" ref="answer0512" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell13"><input type="text" ref="answer0513" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell14"><input type="text" ref="answer0514" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell15"><input type="text" ref="answer0515" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell16"><input type="text" ref="answer0516" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell17"><input type="text" ref="answer0517" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell18"><input type="text" ref="answer0518" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell19"><input type="text" ref="answer0519" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell20"><input type="text" ref="answer0520" maxLength="1" onChange={this.handleChange} /></td>
                        </tr>
                        <tr className="row6">
                          <td className="cell cell0"><input type="text" ref="answer0600" placeholder="5" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell1"><input type="text" ref="answer0601" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell2"><input type="text" ref="answer0602" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell3"><input type="text" ref="answer0603" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell4"><input type="text" ref="answer0604" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell5"><input type="text" ref="answer0605" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell6"><input type="text" ref="answer0606" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell7"><input type="text" ref="answer0607" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell8"><input type="text" ref="answer0608" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell9" style={tdStyles}></td>
                          <td className="cell cell10" style={tdStyles}></td>
                          <td className="cell cell11"><input type="text" ref="answer0611" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell12" style={tdStyles}></td>
                          <td className="cell cell13" style={tdStyles}></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16"><input type="text" ref="answer0616" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row7">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3"><input type="text" ref="answer0703" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell4" style={tdStyles}></td>
                          <td className="cell cell5" style={tdStyles}></td>
                          <td className="cell cell6" style={tdStyles}></td>
                          <td className="cell cell7" style={tdStyles}></td>
                          <td className="cell cell8" style={tdStyles}></td>
                          <td className="cell cell9" style={tdStyles}></td>
                          <td className="cell cell10" style={tdStyles}></td>
                          <td className="cell cell11"><input type="text" ref="answer0711" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell12" style={tdStyles}></td>
                          <td className="cell cell13" style={tdStyles}></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16"><input type="text" ref="answer0716" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row8">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3"><input type="text" ref="answer0803" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell4" style={tdStyles}></td>
                          <td className="cell cell5" style={tdStyles}></td>
                          <td className="cell cell6" style={tdStyles}></td>
                          <td className="cell cell7" style={tdStyles}></td>
                          <td className="cell cell8" style={tdStyles}></td>
                          <td className="cell cell9"><input type="text" ref="answer0809" placeholder="6" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell10"><input type="text" ref="answer0810" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell11"><input type="text" ref="answer0811" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell12"><input type="text" ref="answer0812" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell13"><input type="text" ref="answer0813" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell14"><input type="text" ref="answer0814" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell15"><input type="text" ref="answer0815" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell16"><input type="text" ref="answer0816" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell17"><input type="text" ref="answer0817" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell18"><input type="text" ref="answer0818" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row9">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3"><input type="text" ref="answer0903" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell4" style={tdStyles}></td>
                          <td className="cell cell5" style={tdStyles}></td>
                          <td className="cell cell6" style={tdStyles}></td>
                          <td className="cell cell7" style={tdStyles}></td>
                          <td className="cell cell8" style={tdStyles}></td>
                          <td className="cell cell9" style={tdStyles}></td>
                          <td className="cell cell10" style={tdStyles}></td>
                          <td className="cell cell11"><input type="text" ref="answer0911" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell12" style={tdStyles}></td>
                          <td className="cell cell13" style={tdStyles}></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16" style={tdStyles}></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row10">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3"><input type="text" ref="answer1003" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell4" style={tdStyles}></td>
                          <td className="cell cell5"><input type="text" ref="answer1005" placeholder="7" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell6"><input type="text" ref="answer1006" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell7"><input type="text" ref="answer1007" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell8"><input type="text" ref="answer1008" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell9"><input type="text" ref="answer1009" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell10"><input type="text" ref="answer1010" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell11"><input type="text" ref="answer1011" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell12" style={tdStyles}></td>
                          <td className="cell cell13" style={tdStyles}></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16" style={tdStyles}></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row11">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3"><input type="text" ref="answer1103" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell4" style={tdStyles}></td>
                          <td className="cell cell5" style={tdStyles}></td>
                          <td className="cell cell6" style={tdStyles}></td>
                          <td className="cell cell7" style={tdStyles}></td>
                          <td className="cell cell8" style={tdStyles}></td>
                          <td className="cell cell9" style={tdStyles}></td>
                          <td className="cell cell10" style={tdStyles}></td>
                          <td className="cell cell11"><input type="text" ref="answer1111" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell12" style={tdStyles}></td>
                          <td className="cell cell13" style={tdStyles}></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16" style={tdStyles}></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row12">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2"><input type="text" ref="answer1202" placeholder="8" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell3"><input type="text" ref="answer1203" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell4"><input type="text" ref="answer1204" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell5"><input type="text" ref="answer1205" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell6"><input type="text" ref="answer1206" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell7"><input type="text" ref="answer1207" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell8"><input type="text" ref="answer1208" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell9"><input type="text" ref="answer1209" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell10"><input type="text" ref="answer1210" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell11"><input type="text" ref="answer1211" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell12" style={tdStyles}></td>
                          <td className="cell cell13" style={tdStyles}></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16" style={tdStyles}></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row13">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3"><input type="text" ref="answer1303" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell4" style={tdStyles}></td>
                          <td className="cell cell5" style={tdStyles}></td>
                          <td className="cell cell6" style={tdStyles}></td>
                          <td className="cell cell7" style={tdStyles}></td>
                          <td className="cell cell8" style={tdStyles}></td>
                          <td className="cell cell9" style={tdStyles}></td>
                          <td className="cell cell10" style={tdStyles}></td>
                          <td className="cell cell11"><input type="text" ref="answer1311" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell12" style={tdStyles}></td>
                          <td className="cell cell13" style={tdStyles}></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16" style={tdStyles}></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row14">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3" style={tdStyles}></td>
                          <td className="cell cell4" style={tdStyles}></td>
                          <td className="cell cell5" style={tdStyles}></td>
                          <td className="cell cell6" style={tdStyles}></td>
                          <td className="cell cell7" style={tdStyles}></td>
                          <td className="cell cell8" style={tdStyles}></td>
                          <td className="cell cell9" style={tdStyles}></td>
                          <td className="cell cell10" style={tdStyles}></td>
                          <td className="cell cell11"><input type="text" ref="answer1411" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell12" style={tdStyles}></td>
                          <td className="cell cell13" style={tdStyles}></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16" style={tdStyles}></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row15">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3" style={tdStyles}></td>
                          <td className="cell cell4" style={tdStyles}></td>
                          <td className="cell cell5" style={tdStyles}></td>
                          <td className="cell cell6" style={tdStyles}></td>
                          <td className="cell cell7"><input type="text" ref="answer1507" placeholder="9" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell8" style={tdStyles}></td>
                          <td className="cell cell9" style={tdStyles}></td>
                          <td className="cell cell10" style={tdStyles}></td>
                          <td className="cell cell11"><input type="text" ref="answer1511" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell12" style={tdStyles}></td>
                          <td className="cell cell13" style={tdStyles}></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16" style={tdStyles}></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row16">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3" style={tdStyles}></td>
                          <td className="cell cell4" style={tdStyles}></td>
                          <td className="cell cell5" style={tdStyles}></td>
                          <td className="cell cell6" style={tdStyles}></td>
                          <td className="cell cell7"><input type="text" ref="answer1607" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell8" style={tdStyles}></td>
                          <td className="cell cell9" style={tdStyles}></td>
                          <td className="cell cell10" style={tdStyles}></td>
                          <td className="cell cell11"><input type="text" ref="answer1611" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell12" style={tdStyles}></td>
                          <td className="cell cell13" style={tdStyles}></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16" style={tdStyles}></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row17">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3" style={tdStyles}></td>
                          <td className="cell cell4"><input type="text" ref="answer1704" placeholder="10" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell5"><input type="text" ref="answer1705" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell6"><input type="text" ref="answer1706" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell7"><input type="text" ref="answer1707" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell8"><input type="text" ref="answer1708" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell9"><input type="text" ref="answer1709" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell10"><input type="text" ref="answer1710" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell11"><input type="text" ref="answer1711" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell12"><input type="text" ref="answer1712" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell13"><input type="text" ref="answer1713" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16" style={tdStyles}></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row18">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3" style={tdStyles}></td>
                          <td className="cell cell4" style={tdStyles}></td>
                          <td className="cell cell5" style={tdStyles}></td>
                          <td className="cell cell6" style={tdStyles}></td>
                          <td className="cell cell7"><input type="text" ref="answer1807" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell8" style={tdStyles}></td>
                          <td className="cell cell9" style={tdStyles}></td>
                          <td className="cell cell10" style={tdStyles}></td>
                          <td className="cell cell11"><input type="text" ref="answer1811" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell12" style={tdStyles}></td>
                          <td className="cell cell13" style={tdStyles}></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16" style={tdStyles}></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row19">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3" style={tdStyles}></td>
                          <td className="cell cell4" style={tdStyles}></td>
                          <td className="cell cell5" style={tdStyles}></td>
                          <td className="cell cell6" style={tdStyles}></td>
                          <td className="cell cell7"><input type="text" ref="answer1907" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell8" style={tdStyles}></td>
                          <td className="cell cell9" style={tdStyles}></td>
                          <td className="cell cell10" style={tdStyles}></td>
                          <td className="cell cell11" style={tdStyles}></td>
                          <td className="cell cell12" style={tdStyles}></td>
                          <td className="cell cell13" style={tdStyles}></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16" style={tdStyles}></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                        <tr className="row20">
                          <td className="cell cell0" style={tdStyles}></td>
                          <td className="cell cell1" style={tdStyles}></td>
                          <td className="cell cell2" style={tdStyles}></td>
                          <td className="cell cell3" style={tdStyles}></td>
                          <td className="cell cell4" style={tdStyles}></td>
                          <td className="cell cell5" style={tdStyles}></td>
                          <td className="cell cell6" style={tdStyles}></td>
                          <td className="cell cell7"><input type="text" ref="answer2007" maxLength="1" onChange={this.handleChange} /></td>
                          <td className="cell cell8" style={tdStyles}></td>
                          <td className="cell cell9" style={tdStyles}></td>
                          <td className="cell cell10" style={tdStyles}></td>
                          <td className="cell cell11" style={tdStyles}></td>
                          <td className="cell cell12" style={tdStyles}></td>
                          <td className="cell cell13" style={tdStyles}></td>
                          <td className="cell cell14" style={tdStyles}></td>
                          <td className="cell cell15" style={tdStyles}></td>
                          <td className="cell cell16" style={tdStyles}></td>
                          <td className="cell cell17" style={tdStyles}></td>
                          <td className="cell cell18" style={tdStyles}></td>
                          <td className="cell cell19" style={tdStyles}></td>
                          <td className="cell cell20" style={tdStyles}></td>
                        </tr>
                      </table>
                    );
                },
        
                handleChange: function(e) {
                    var data = {
                        answer0016: ReactDOM.findDOMNode(this.refs.answer0016).value,
                        answer0116: ReactDOM.findDOMNode(this.refs.answer0116).value,
                        answer0216: ReactDOM.findDOMNode(this.refs.answer0216).value,
                        answer0311: ReactDOM.findDOMNode(this.refs.answer0311).value,
                        answer0316: ReactDOM.findDOMNode(this.refs.answer0316).value,
                        answer0411: ReactDOM.findDOMNode(this.refs.answer0411).value,
                        answer0416: ReactDOM.findDOMNode(this.refs.answer0416).value,
                        answer0503: ReactDOM.findDOMNode(this.refs.answer0503).value,
                        answer0511: ReactDOM.findDOMNode(this.refs.answer0511).value,
                        answer0512: ReactDOM.findDOMNode(this.refs.answer0512).value,
                        answer0513: ReactDOM.findDOMNode(this.refs.answer0513).value,
                        answer0514: ReactDOM.findDOMNode(this.refs.answer0514).value,
                        answer0515: ReactDOM.findDOMNode(this.refs.answer0515).value,
                        answer0516: ReactDOM.findDOMNode(this.refs.answer0516).value,
                        answer0517: ReactDOM.findDOMNode(this.refs.answer0517).value,
                        answer0518: ReactDOM.findDOMNode(this.refs.answer0518).value,
                        answer0519: ReactDOM.findDOMNode(this.refs.answer0519).value,
                        answer0520: ReactDOM.findDOMNode(this.refs.answer0520).value,
                        answer0600: ReactDOM.findDOMNode(this.refs.answer0600).value,
                        answer0601: ReactDOM.findDOMNode(this.refs.answer0601).value,
                        answer0602: ReactDOM.findDOMNode(this.refs.answer0602).value,
                        answer0603: ReactDOM.findDOMNode(this.refs.answer0603).value,
                        answer0604: ReactDOM.findDOMNode(this.refs.answer0604).value,
                        answer0605: ReactDOM.findDOMNode(this.refs.answer0605).value,
                        answer0606: ReactDOM.findDOMNode(this.refs.answer0606).value,
                        answer0607: ReactDOM.findDOMNode(this.refs.answer0607).value,
                        answer0608: ReactDOM.findDOMNode(this.refs.answer0608).value,
                        answer0611: ReactDOM.findDOMNode(this.refs.answer0611).value,
                        answer0616: ReactDOM.findDOMNode(this.refs.answer0616).value,
                        answer0703: ReactDOM.findDOMNode(this.refs.answer0703).value,
                        answer0711: ReactDOM.findDOMNode(this.refs.answer0711).value,
                        answer0716: ReactDOM.findDOMNode(this.refs.answer0716).value,
                        answer0803: ReactDOM.findDOMNode(this.refs.answer0803).value,
                        answer0809: ReactDOM.findDOMNode(this.refs.answer0809).value,
                        answer0810: ReactDOM.findDOMNode(this.refs.answer0810).value,
                        answer0811: ReactDOM.findDOMNode(this.refs.answer0811).value,
                        answer0812: ReactDOM.findDOMNode(this.refs.answer0812).value,
                        answer0813: ReactDOM.findDOMNode(this.refs.answer0813).value,
                        answer0814: ReactDOM.findDOMNode(this.refs.answer0814).value,
                        answer0815: ReactDOM.findDOMNode(this.refs.answer0815).value,
                        answer0816: ReactDOM.findDOMNode(this.refs.answer0816).value,
                        answer0817: ReactDOM.findDOMNode(this.refs.answer0817).value,
                        answer0818: ReactDOM.findDOMNode(this.refs.answer0818).value,
                        answer0903: ReactDOM.findDOMNode(this.refs.answer0903).value,
                        answer0911: ReactDOM.findDOMNode(this.refs.answer0911).value,
                        answer1003: ReactDOM.findDOMNode(this.refs.answer1003).value,
                        answer1005: ReactDOM.findDOMNode(this.refs.answer1005).value,
                        answer1006: ReactDOM.findDOMNode(this.refs.answer1006).value,
                        answer1007: ReactDOM.findDOMNode(this.refs.answer1007).value,
                        answer1008: ReactDOM.findDOMNode(this.refs.answer1008).value,
                        answer1009: ReactDOM.findDOMNode(this.refs.answer1009).value,
                        answer1010: ReactDOM.findDOMNode(this.refs.answer1010).value,
                        answer1011: ReactDOM.findDOMNode(this.refs.answer1011).value,
                        answer1103: ReactDOM.findDOMNode(this.refs.answer1103).value,
                        answer1111: ReactDOM.findDOMNode(this.refs.answer1111).value,
                        answer1202: ReactDOM.findDOMNode(this.refs.answer1202).value,
                        answer1203: ReactDOM.findDOMNode(this.refs.answer1203).value,
                        answer1204: ReactDOM.findDOMNode(this.refs.answer1204).value,
                        answer1205: ReactDOM.findDOMNode(this.refs.answer1205).value,
                        answer1206: ReactDOM.findDOMNode(this.refs.answer1206).value,
                        answer1207: ReactDOM.findDOMNode(this.refs.answer1207).value,
                        answer1208: ReactDOM.findDOMNode(this.refs.answer1208).value,
                        answer1209: ReactDOM.findDOMNode(this.refs.answer1209).value,
                        answer1210: ReactDOM.findDOMNode(this.refs.answer1210).value,
                        answer1211: ReactDOM.findDOMNode(this.refs.answer1211).value,
                        answer1303: ReactDOM.findDOMNode(this.refs.answer1303).value,
                        answer1311: ReactDOM.findDOMNode(this.refs.answer1311).value,
                        answer1411: ReactDOM.findDOMNode(this.refs.answer1411).value,
                        answer1507: ReactDOM.findDOMNode(this.refs.answer1507).value,
                        answer1511: ReactDOM.findDOMNode(this.refs.answer1511).value,
                        answer1607: ReactDOM.findDOMNode(this.refs.answer1607).value,
                        answer1611: ReactDOM.findDOMNode(this.refs.answer1611).value,
                        answer1704: ReactDOM.findDOMNode(this.refs.answer1704).value,
                        answer1705: ReactDOM.findDOMNode(this.refs.answer1705).value,
                        answer1706: ReactDOM.findDOMNode(this.refs.answer1706).value,
                        answer1707: ReactDOM.findDOMNode(this.refs.answer1707).value,
                        answer1708: ReactDOM.findDOMNode(this.refs.answer1708).value,
                        answer1709: ReactDOM.findDOMNode(this.refs.answer1709).value,
                        answer1710: ReactDOM.findDOMNode(this.refs.answer1710).value,
                        answer1711: ReactDOM.findDOMNode(this.refs.answer1711).value,
                        answer1712: ReactDOM.findDOMNode(this.refs.answer1712).value,
                        answer1713: ReactDOM.findDOMNode(this.refs.answer1713).value,
                        answer1807: ReactDOM.findDOMNode(this.refs.answer1807).value,
                        answer1811: ReactDOM.findDOMNode(this.refs.answer1811).value,
                        answer1907: ReactDOM.findDOMNode(this.refs.answer1907).value,
                        answer2007: ReactDOM.findDOMNode(this.refs.answer2007).value
                    };
                }
            });
            
            var Output = React.createClass({
                render: function() {
                    return (
                      <div className="clues">
                        <p>{this.props.clue}</p>
                      </div>
                    );
                }
            });
            
            var data = [
                {
                    answer: 'Pascaline',
                    clue: "1. The mechanical calculator primarily intended as an adding machine.",
                    imageUrl: 'images/250px-Blaise_Pascal_Versailles.JPG'
                },
                {
                    answer: 'Difference engine',
                    clue: "2. An automatic mechanical calculator designed to tabulate polynomial functions.",
                    imageUrl: 'images/220px-Charles_Babbage_-_1860.jpg'
                },
                {
                    answer: "MooresLaw",
                    clue: "3. Processor complexity will double every two years.",
                    imageUrl: 'images/Gordon_Moore.jpg'
                },
                {
                    answer: 'FuzzyLogic',
                    clue: "4. A form of many-valued logic in which the truth values of variables may be any real number between 0 and 1.",
                    imageUrl: 'images/Zadeh-barcelona-1997@92x115.gif'
                },
                
                {
                    answer: 'Algorithm',
                    clue: "5. The first published description of programming.",
                    imageUrl: 'images/220px-Ada_Lovelace_portrait.jpg'
                },
                {
                    answer: 'TuringTest',
                    clue: "6. A test of a machine's ability to exhibit intelligent behaviour equivalent to, or indistinguishable from, that of a human.",
                    imageUrl: 'images/Alan_Turing_Aged_16.jpg'
                },
                {
                    answer: 'Boolean',
                    clue: "7. A branch of algebra in which the values of the variables are the truth values true and false.",
                    imageUrl: 'images/220px-George_Boole_color.jpg'
                },
                {
                    answer: 'Vacuum tube',
                    clue: "8. A device used in electronics that controls electric current between electrodes in an evacuated container.",
                    imageUrl: 'images/220px-John_Ambrose_Fleming_1890.png'
                },
                {
                    answer: 'Abacus',
                    clue: "9. The first known calculator.",
                    imageUrl: 'images/220px-Boulier1.JPG'
                },
                {
                    answer: 'Relational',
                    clue: "10. A digital database whose organization is based on the relational model.",
                    imageUrl: 'images/Edgar_F_Codd.jpg'
                }
            ];
            
            ReactDOM.render(<Game data={data} />, document.getElementById('game'));
        })()
    )
}

export default WordGame;