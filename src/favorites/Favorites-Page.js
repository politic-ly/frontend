import React from "react";
import InitiativeCard from "../cards/InitiativeCard";
import pic from "../assets/blurby-cat.jpg";

function Favorites() {
  return (
    <div className="page-wrapper">
      <span>
        <h2>
          <b>Favorites Page</b>
        </h2>
        <p className="page-subtitle">
          <i>My Bookmarked/Top Initiatives</i>
        </p>
      </span>
      <div className="favorites-wrapper">
        <InitiativeCard
          img={pic}
          title="Memow has no hands!"
          subtitle="Memows lose their hands at alarming rate in Viet Nam"
          location="Randall County"
          volunteers={3}
        />
        <InitiativeCard
          img={pic}
          title="Get Jashua pegged!"
          subtitle="Local omega man Jashua needs his butt invaded by a wagon"
          location="Jammies County"
          volunteers={8}
        />
      </div>
    </div>
  );
}

export default Favorites;
