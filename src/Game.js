import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/grid";
import Button from "@material-ui/core/Button";
import man from "./img/man.png";
import fw from "./img/fw.png";
import line1 from "./img/line1.png";
import line2 from "./img/line2.png";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import config from "./config.js";
import Tooltip from "@material-ui/core/Tooltip";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
const B = ({
	style = { fontWeight: "bold", margin: "10px 0px", fontSize: "1.3rem" },
	children,
}) => (
	<Typography
		color="textPrimary"
		variant="body1"
		component="strong"
		style={style}>
		{children}
	</Typography>
);
const Heading = ({ style = { fontWeight: "bold" }, children }) => (
	<Typography color="textPrimary" variant="h4" component="h1" style={style}>
		{children}
	</Typography>
);
const SubHeading = ({
	style = { fontWeight: "normal", marginBottom: 20 },
	children,
}) => (
	<Typography color="textSecondary" variant="h5" component="h1" style={style}>
		{children}
	</Typography>
);
const Toggle = ({ tooltip, array, method, description }) => {
	const [open, setOpen] = useState(false);
	let isopen = open ? " active" : " inactive";
	let thelength = array.filter((val) => val.method === method);
	return (
		<>
			<div
				className={"toggle" + isopen}
				onClick={() => {
					setOpen(!open);
				}}>
				{description} ({thelength.length})
				<Tooltip title={tooltip} placement="right">
					<HelpOutlineIcon
						placement="top"
						style={{
							fontSize: "16px",
							marginBottom: -3,
							marginLeft: 5,
							opacity: 0.5,
						}}
					/>
				</Tooltip>
			</div>
			{open && thelength.length > 0 && (
				<div className={"toggle_items"}>
					{array.length > 0 &&
						array.map((item) => {
							if (item.method === method)
								return (
									<>
										<div>{item.url}</div>
									</>
								);
						})}
				</div>
			)}
		</>
	);
};

const Game = () => {
	const [urls, setUrls] = useState(config.urls);
	const randomURL = (crt) => {
		let available = urls.filter(
			(item, key) => used.includes(item.url) === false
		);
		console.log(available);
		console.log(used);

		if (available.length > 0) {
			let key = Math.floor(Math.random() * available.length);
			let url = available[key];
			setUsed([...used, url.url]);
			return url;
		} else {
			setComplete(true);
		}
	};
	const [canClick, setCanClick] = useState(true);
	const [currentUrl, setCurrentUrl] = useState(null);
	const [correct, setCorrect] = useState(0);
	const [wrong, setWrong] = useState(0);
	const [started, setStarted] = useState(false);
	const [complete, setComplete] = useState(false);
	const [date, setDate] = useState(Date.now());
	const [wrongArray, setWrongArray] = useState([]);
	const [correctArray, setCorrectArray] = useState([]);
	const [used, setUsed] = useState([]);
	useEffect(() => {
		if (started) setCurrentUrl(randomURL());
	}, [started]);
	const click = (color) => {
		setCanClick(false);
		const elem = document.getElementById(color + "Circle");
		elem.classList.add("goleft");
		setTimeout(() => {
			elem.classList.add("godown");
			setTimeout(() => {
				elem.classList.remove("goleft");
				elem.classList.remove("godown");
				setCanClick(true);
				if (currentUrl.deceptive && color === "red") {
					setCorrect(correct + 1);
					let isdup = false;
					correctArray.forEach((item) => {
						if (item.url === currentUrl.url) isdup = true;
					});
					if (!isdup)
						setCorrectArray([
							...correctArray,
							{
								url: currentUrl.url,
								deceptive: currentUrl.deceptive,
								method: currentUrl.method,
							},
						]);
				} else if (currentUrl.deceptive && color === "green") {
					setWrong(wrong + 1);
					let isdup = false;
					wrongArray.forEach((item) => {
						if (item.url === currentUrl.url) isdup = true;
					});
					if (!isdup)
						setWrongArray([
							...wrongArray,
							{
								url: currentUrl.url,
								deceptive: currentUrl.deceptive,
								method: currentUrl.method,
							},
						]);
				} else if (!currentUrl.deceptive && color === "green") {
					setCorrect(correct + 1);
					let isdup = false;
					correctArray.forEach((item) => {
						if (item.url === currentUrl.url) isdup = true;
					});
					if (!isdup)
						setCorrectArray([
							...correctArray,
							{
								url: currentUrl.url,
								deceptive: currentUrl.deceptive,
								method: currentUrl.method,
							},
						]);
				} else {
					setWrong(wrong + 1);
					let isdup = false;
					wrongArray.forEach((item) => {
						if (item.url === currentUrl.url) isdup = true;
					});
					if (!isdup)
						setWrongArray([
							...wrongArray,
							{
								url: currentUrl.url,
								deceptive: currentUrl.deceptive,
								method: currentUrl.method,
							},
						]);
				}

				setCurrentUrl(randomURL(currentUrl));
			}, 400);
		}, 400);
	};
	return (
		<>
			<Grid item xs={12} md={10}>
				<Heading>Deceptive links</Heading>
				<SubHeading>The game</SubHeading>
				{!complete ? (
					<div id="game">
						{started && (
							<>
								<Countdown
									date={date + 20000}
									intervalDelay={0}
									precision={0}
									onComplete={() => {
										setComplete(true);
									}}
									renderer={(props) => (
										<div id="timer">{props.total / 1000}</div>
									)}
								/>
								<div id="score">
									<span className="correct">{correct}</span>/
									<span className="wrong">{wrong}</span>
								</div>
							</>
						)}
						<div id="redCircle"></div>
						<div id="greenCircle"></div>
						<img src={man} id="man" alt="man" />
						<img src={line1} id="line1" alt="connection" />
						<img src={line2} id="line2" alt="connection" />
						<img src={fw} id="fw" alt="firewall" />
						<div id="browser">
							<div class="browser-mockup with-url">
								<input
									className="url"
									id="theURL"
									value={currentUrl ? (started ? currentUrl.url : "") : ""}
								/>

								<div id="content"></div>
							</div>
						</div>

						<div id="buttons">
							{started ? (
								<>
									<Button
										size="large"
										variant="contained"
										disabled={!canClick}
										onClick={() => {
											click("red");
										}}
										style={{ background: "#FF4444" }}>
										<CloseIcon style={{ color: "#fff" }} />
									</Button>
									&nbsp;&nbsp;&nbsp;
									<Button
										size="large"
										variant="contained"
										disabled={!canClick}
										onClick={() => {
											click("green");
										}}
										style={{ background: "#99BB33" }}>
										<CheckIcon style={{ color: "#fff" }} />
									</Button>
								</>
							) : (
								<Button
									size="large"
									variant="contained"
									onClick={() => {
										setStarted(true);
										setDate(Date.now());
									}}>
									Start
								</Button>
							)}
						</div>
					</div>
				) : (
					<>
						<Grid item xs={12} md={2}></Grid>
						<Grid item xs={10}>
							<Grid container>
								<Grid item xs={12}>
									<Typography
										variant="h4"
										style={{
											textAlign: "center",
											margin: "40px 0px",
											marginTop: 10,
										}}>
										Game over!
									</Typography>
								</Grid>
								<Grid item xs={12} md={7}>
									<B>Your score:</B>
									<div id="score2">
										<span className="correct">{correct}</span>/
										<span className="wrong">{wrong}</span>
									</div>

									<br />
									<br />
									<B>URLs analyzed:</B>
									<br />
									<Typography
										variant="h5"
										style={{ fontSize: "26px", fontWeight: "bold" }}>
										{correctArray.length + wrongArray.length}
									</Typography>
									<br />

									<br />
									<Button
										onClick={() => {
											window.location.reload();
										}}
										color="primary"
										variant="contained">
										Play again
									</Button>
								</Grid>
								<Grid item xs={12} md={5}>
									<B>Correctly analyzed URLs</B>
									<Toggle
										array={correctArray}
										method={0}
										description="Legitimate"
										tooltip="These URLs were legitimate"
									/>
									<Toggle
										array={correctArray}
										method={1}
										description="Typosquatting"
										tooltip="These URLs were using typosquatting"
									/>
									<Toggle
										array={correctArray}
										method={2}
										description="Deceptive file extension"
										tooltip="These URLs were using deceptive file extensions"
									/>
									<Toggle
										array={correctArray}
										method={3}
										description="Trusted domain spoofing"
										tooltip="These URLs were using trusted domain spoofing"
									/>
									<Toggle
										array={correctArray}
										method={4}
										description="Trusted domain redirection"
										tooltip="These URLs were using trusted domain redirection"
									/>
									<br />
									<br />
									<br />
									<B>Wrongly analyzed URLs</B>
									<Toggle
										array={wrongArray}
										method={0}
										description="Legitimate"
										tooltip="These URLs were legitimate"
									/>
									<Toggle
										array={wrongArray}
										method={1}
										description="Typosquatting"
										tooltip="These URLs were using typosquatting"
									/>
									<Toggle
										array={wrongArray}
										method={2}
										description="Deceptive file extension"
										tooltip="These URLs were using deceptive file extensions"
									/>
									<Toggle
										array={wrongArray}
										method={3}
										description="Trusted domain spoofing"
										tooltip="These URLs were using trusted domain spoofing"
									/>
									<Toggle
										array={wrongArray}
										method={4}
										description="Trusted domain redirection"
										tooltip="These URLs were using trusted domain redirection"
									/>
								</Grid>
							</Grid>
						</Grid>
					</>
				)}
			</Grid>
		</>
	);
};
export default Game;
