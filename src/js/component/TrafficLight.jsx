import React from "react";
import { useState } from "react";

const Luces = () => {
	// const [color, setColor] = useState(false);
	const [color, setColor] = useState("glow");

	return (
		<>
			<div className="container text-center">
				<div className="base"></div>
				<div className="trafficLight">
					<div
						className={
							"lightTop " +
							(color === "lightTop" ? " glowGreen" : "")
						}
						onClick={() => setColor("lightTop")}></div>
					<div
						className={
							"lightMedium " +
							(color === "lightMedium" ? " glowYellow" : "")
						}
						onClick={() => setColor("lightMedium")}></div>
					<div
						className={
							"lightButton " +
							(color === "lightButton" ? " glowRed" : "")
						}
						onClick={() => setColor("lightButton")}></div>
				</div>
			</div>
		</>
	);
};

export default Luces;
