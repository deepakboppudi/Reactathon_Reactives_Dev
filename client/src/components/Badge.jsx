import React from 'react';

class Badge extends React.Component{
  constructor(props){
    super(props);
  }

  getBadge(badgeId){
    switch(badgeId){
      case "1":
        return <p class="badge bronze">Bronze</p>
      case "2":
        return <p class="badge silver">Silver</p>
      case "3":
        return <p class="badge gold">Gold</p>
      case "4":
        return <p class="badge platinum">Platinum</p>

    }
  }

  render(){
    return(
      <div class="badge-container">
        {this.getBadge(this.props.badgeId)}
      </div>
    )
  }
}

  export default Badge;
