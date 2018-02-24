import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
import CannonBall from './CannonBall';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';
import Heart from './Heart';
import StartGame from './StartGame';
import Title from './Title';

const Canvas = props => {
	const gameHeight = 1200;

	const viewBox = [
		window.innerWidth / -2,
		100 - gameHeight,
		window.innerWidth,
		gameHeight
	];

	return (
		<svg
			id="aliens-go-home-canvas"
			preserveAspectRatio="xMaxYMax none"
			onMouseMove={props.trackMouse}
			viewBox={viewBox}>
			<defs>
				<filter id="shadow">
					<feDropShadow dx="2" dy="1" stdDeviation="2" />
				</filter>
			</defs>
			<Sky />
			<Ground />
			<CannonPipe rotation={props.angle} />
			<CannonBase />
			<CannonBall position={{ x: 0, y: -100 }} />
			<CurrentScore score={15} />
			<Heart position={{ x: -300, y: 35 }} />
			<Heart position={{ x: -400, y: 35 }} />
			<Heart position={{ x: -500, y: 35 }} />
			{!props.gameState.started && (
				<g>
					<StartGame onClick={() => props.startGame()} />
					<Title />
				</g>
			)}

			{props.gameState.started && (
				<g>
					{props.gameState.flyingObjects.map(flyingObject => (
						<FlyingObject
							key={flyingObject.id}
							position={flyingObject.position}
						/>
					))}
				</g>
			)}
		</svg>
	);
};

Canvas.propTypes = {
	angle: PropTypes.number.isRequired,
	trackMouse: PropTypes.func.isRequired
};

export default Canvas;
