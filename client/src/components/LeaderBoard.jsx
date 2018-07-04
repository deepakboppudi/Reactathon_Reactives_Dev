import React from 'react';

class LeaderBoard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    var score = 100;
    var playerDemo = {"players":[{"firstname":"Ace","lastname":"Walker"},{"firstname":"Bruce","lastname":"Wayne"},{"firstname":"Tony","lastname":"Stark"},{"firstname":"Sephiria","lastname":"Arks"},{"firstname":"Edward","lastname":"Elric"},{"firstname":"Jon","lastname":"Snow"},{"firstname":"Ted","lastname":"Mosby"},{"firstname":"Joey","lastname":"Tribianni"},{"firstname":"Lelouch","lastname":"Vi Brittania"}]}
    return(<div>
      <div className="row col-md-12 col-xs-12 col-sm-12">
                <p>
                    <button type="button"className="btn btn-danger btn-lg" onClick={() => this.props.backHandler()}>
                        <span className="glyphicon glyphicon-arrow-left"></span> Back
                    </button>
                </p>
            </div>
      <div class="card mb-3">
        <div class="card-header">
          <i class="fa fa-table"></i> {this.props.hackName} Leaderboard</div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
              {
                    playerDemo.players.map((item,i) => {
                                return <tr>
                                <td>{item.firstname} {item.lastname}</td>
                                <td>{100-(i*5)}</td>
                                </tr>
                    }
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
        <div class="card-footer small text-muted">Last updated on { new Date().toLocaleString()}</div>
      </div>


      </div>);
  }
}

export default LeaderBoard;
