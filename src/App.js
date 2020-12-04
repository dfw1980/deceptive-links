import "./App.css";
import Typography from "@material-ui/core/Typography";
import {
	NavLink,
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/grid";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import example from "./example.png";
import lightBulb from "./lightBulb.png";
import Game from "./Game";
import config from "./config.js";

let dark = false; // dark mode
let theme = createMuiTheme({
	palette: {
		type: dark ? "dark" : "light",
		background: {
			paper: dark ? "#1d222e" : "#fefefe",
		},
		primary: {
			main: "#1881bc",
		},
	},
});

const Typosquatting = ({ video }) => {
	return (
		<>
			<Grid item xs={10}>
				<Grid container spacing={7}>
					<Grid item xs={12} md={8}>
						<Heading>Deceptive links</Heading>
						<SubHeading>- Typosquatting</SubHeading>
						<B></B>
						<P>
							How many times have you misspelled URLs? Either adding one extra
							letter, miss one letter or just completly forgot how to spell the
							word. Typosquatters relies on the mistakes explained above to
							direct you to a website made that the user would think that they
							are in the real website.
						</P>
						<br />
						<br />
						<B>Different kinds of typosquatting</B>
						<SubHeading style={{ fontSize: "18px", marginTop: 10 }}>
							Lets take ww.paypal.com as an example
						</SubHeading>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className="quote" style={{ borderColor: "transparent" }}>
							<Typography color="primary" variant="h4" component="p">
								typo
								<br />
								/ˈtʌɪpəʊ/
								<span
									style={{
										fontSize: "1.5rem",
										lineHeight: "2.4rem",
										marginTop: 25,
										display: "block",
									}}>
									"a typographical error"
								</span>
							</Typography>
						</div>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={2}></Grid>
			<Grid item xs={10}>
				<Grid container style={{ marginTop: -70 }} spacing={2}>
					<Grid item xs={12} md={4}>
						<div className="item">
							<div className="watermark">1</div>
							<b>Common misspelling or foreign misspelling:</b>
							<span>www.peypal.com</span>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className="item">
							<div className="watermark">2</div>
							<b>Typos:</b>
							<span>www.paypla.com</span>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className="item">
							<div className="watermark">3</div>
							<b>Different top level domain:</b>
							<span>www.paypal.org</span>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className="item">
							<div className="watermark">4</div>

							<b>Extra period:</b>
							<span>www.p.aypal.com</span>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className="item">
							<div className="watermark">5</div>

							<b>Different phrased domain name:</b>
							<span>www.payspal.com</span>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<Next to="/typosquatting/motivation">Motivation</Next>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};
const Spacer = () => (
	<>
		<br />
		<br />
	</>
);
const SmallerB = ({ children }) => (
	<>
		<Typography color="textPrimary" variant="h6" component="strong">
			{children}
		</Typography>
	</>
);
const Motivation = ({ video }) => (
	<>
		<Grid item xs={12} md={5}>
			<Heading>Deceptive links</Heading>
			<SubHeading>- Typosquatting</SubHeading>
			<B>What is the motivation?</B>
			<P>
				It is important for me to specify that not all the URLs in the example
				above is malicious or associated with phishing. You can not really know
				their motivation before you visit the domain, check the video on the
				right side to learn how to visit suspicious URLs.
				<Spacer />
				To have a better understanding of the motivation, we can divide them
				into three different groups. Economic gain, reputation and malicious
				intent.
			</P>
			<Spacer />
			<SmallerB>Economic gain:</SmallerB>
			<P>
				<ul>
					<li>
						Selling the domain to the brand owner, the owner of the domain
						usally charge a lot. The URL might not be reachable, depending on
						the domain owner.
					</li>
					<li>
						Redirect the traffic to either the competitor or the one who pays
						most.
					</li>
					<li>
						Advertising revenues, the page you are visiting is filled with ads.
					</li>
				</ul>
			</P>
			<Spacer />
			<SmallerB>Reputation:</SmallerB>
			<P>
				<ul>
					<li>
						Fake news, the domain can be used to spread lies or destroy the
						reputation of the brand owner.
					</li>
				</ul>
			</P>
			<Spacer />
			<SmallerB>Malicious intent:</SmallerB>
			<P>
				<ul>
					<li>
						Phishing, the owner of the domain copies the layout of the
						brandowner and tries to trick the Internet user that this is the
						legitimate website.
					</li>
					<li>
						Drive-by malware, tricking the user of either download a malicious
						file or adware onto the users computer.
					</li>
					<li>
						Gain information from misaddressed e-mail messages sent to the wrong
						domain.
					</li>
				</ul>
			</P>
		</Grid>
		<Grid item xs={12} md={5}>
			<div className="sticky">
				<B>How do I check the website safely?</B>
				<iframe
					width="100%"
					title="Typosquatting"
					height="300"
					style={{ marginTop: 0 }}
					src={
						"https://www.youtube-nocookie.com/embed/" +
						config.videoIDS.typosquatting
					}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen></iframe>
				<Next to="/deceptive-file-extension">Deceptive file extensions</Next>
			</div>
		</Grid>
	</>
);
const Next = ({ to, children }) => {
	return (
		<>
			<Link to={to} className="nextPage">
				<Button variant="contained" size="large" color="primary">
					{children} <ArrowRightAltIcon />
				</Button>
			</Link>
		</>
	);
};
const Heading = ({ style = { fontWeight: "bold" }, children }) => (
	<Typography color="textPrimary" variant="h4" component="h1" style={style}>
		{children}
	</Typography>
);
const SubHeading = ({
	style = { fontWeight: "normal", marginBottom: 20 },
	children,
}) => (
	<Typography color="textSecondary" variant="h5" component="h2" style={style}>
		{children}
	</Typography>
);
const P = ({
	style = { fontWeight: "normal", margin: "5px 0px", fontSize: "1.2rem" },
	children,
}) => (
	<Typography color="textSecondary" variant="body1" component="p" style={style}>
		{children}
	</Typography>
);
const A = ({ link = "", children }) => (
	<>
		<br />
		<a href={link} className="arrowLink">
			<Typography
				color="textPrimary"
				variant="body1"
				component="span"
				style={{ fontWeight: "bold" }}>
				{children}
			</Typography>
		</a>
	</>
);
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
const Example = () => (
	<>
		<Grid item xs={12} md={6}>
			<Heading>Deceptive links</Heading>
			<SubHeading>- Introduction</SubHeading>
			<B></B>
			<P>
				Deceptive links are URLs which looks similar to a legitimate URL or
				disguised as a legitimate source. The purpose is to make the user click
				the link, so the user can be redirected to a malicious website, either
				to harvest credentials or to upload malicious files to the users
				computer.
			</P>
			<img
				src={example}
				alt="Example deceptive links"
				style={{ width: "100%", marginTop: "30px" }}
			/>
		</Grid>
		<Grid item xs={12} md={4}>
			<div className="quote">
				<Typography color="primary" variant="h4" component="p">
					Deceive
					<br />
					/dɪˈsiːv/
					<span
						style={{
							fontSize: "1.5rem",
							lineHeight: "2.4rem",
							marginTop: 25,
							display: "block",
						}}>
						"to persuade someone that something false is the truth"
					</span>
				</Typography>
			</div>
			<Next to="/introduction">Introduction</Next>
		</Grid>
	</>
);
const Extensions = () => (
	<>
		<Grid item xs={12} md={5}>
			<Heading>Deceptive links</Heading>
			<SubHeading>- Deceptive file extension</SubHeading>
			<B></B>
			<P>
				Are you familiar with some file extensions on your computer? Like for
				example the pictures stored in your computer are usally .png or .jpeg.
				Maybe you have heard some rumours about .exe files, that they are
				dangerous and you should NEVER click them. Deceptive file extension is a
				technique where they try to trick the user to think that the URL
				contains a harmless file, like for example a gif. The users eyes usually
				looks for the first extension in the URL, or the first recognicable
				extension and relay on it.
			</P>
			<B
				style={{
					fontSize: "1.0rem",
					fontWeight: "bold",
					width: "100%",
					display: "block",
					margin: "30px 0px",
				}}>
				imgur.com/r/gifs/6VbcKzO<span style={{ color: "#3b2" }}>.gif</span>
				<span style={{ color: "#c00" }}>.exe</span>
				?client=firefox-b-dq=imagedata=exclusive
			</B>
			<P>
				The technique often use long names and dual extension to confuse the
				user. Lack of knowlegde by the user increases the chance of clicking on
				a malicious URL with deceptive file extension. It is usually the last
				extension that counts:
			</P>
			<B
				style={{
					fontSize: "1.0rem",
					fontWeight: "bold",
					width: "100%",
					display: "block",
					margin: "30px 0px",
				}}>
				Imgur.com/r/gifs/AD31z3.gif.this.doesnt.matter
				<span style={{ color: "#c00" }}>.exe</span>
			</B>

			<B
				style={{
					fontSize: "1.0rem",
					fontWeight: "bold",
					width: "100%",
					display: "block",
					margin: "20px 0px",
				}}>
				Filename: AD31z3.gif.this.doesnt.matter
				<span style={{ color: "#5f5f5f", textDecoration: "underline" }}>
					.exe
				</span>
			</B>
		</Grid>
		<Grid item xs={12} md={5}>
			<div className="quote">
				<img
					src={lightBulb}
					style={{ height: "140px", float: "left", marginTop: "-30px" }}
					alt="lightBulb"
				/>
				<Typography
					color="textSecondary"
					style={{ textAlign: "center" }}
					variant="h6"
					component="p">
					There are many extensions, it is easier to look them up by using
					Google. Try it for yourself! Google "
					<span style={{ color: "#c00" }}>.xyz</span> file type"
				</Typography>
			</div>
			<table>
				<tr>
					<th>File extension</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>.exe</td>
					<td>Executable files</td>
				</tr>
				<tr>
					<td>.pdf</td>
					<td>Portable Document Format (PDF) associated with Adobe</td>
				</tr>
				<tr>
					<td>.xls</td>
					<td>Microsoft Excel, with (x)</td>
				</tr>
				<tr>
					<td>.doc</td>
					<td>File format used by Microsoft Word and OpenOffice</td>
				</tr>
				<tr>
					<td>.vbs</td>
					<td>
						Virtual Basic script, contains code that can be executed in Explorer
						or in the Windows operating system
					</td>
				</tr>
				<tr>
					<td>.zip</td>
					<td>
						Archive file format, contains compressed files within the .zip file
					</td>
				</tr>
				<tr>
					<td>.php</td>
					<td>
						php (computer language) source code file, often used in page files
						to generate HTML from a php engine running on a server.{" "}
					</td>
				</tr>
				<tr>
					<td>.dll</td>
					<td>
						Dynamic link library, contains a library of functions and other
						information that can be accessed by a Windows program. When a
						program is launced, links to the necassary .dll files are created
					</td>
				</tr>
			</table>

			<Next to="/trusted-domain-spoofing">Trusted domain spoofing</Next>
		</Grid>
	</>
);
const TDS = () => (
	<>
		<Grid item xs={12} md={5}>
			<Heading>Deceptive links</Heading>
			<SubHeading>-Trusted domain spoofing</SubHeading>
			<B></B>
			<P>
				Attacks evolve as defenders improve their detection mechanisms. Trusted
				domains recently became even harder to recognize. <br />
				This example is particularly hard to recognize, as it's using a trusted
				domain as a sub-domain for the domain highlighted in red. Since it's
				just a sub-domain, the attachker has the option of getting a valid
				ceritificate for it, resulting in a green lock icon next to the address
				in the browser window. <br />
				This makes it next to impossibler for the user to discern a rogue form a
				legitimate website.
			</P>
			<br />
			<br />
		</Grid>
		<Grid item xs={12} md={5}>
			<iframe
				width="100%"
				title="Trusted domain spoofing"
				height="300"
				style={{ marginTop: 0 }}
				src={"https://www.youtube-nocookie.com/embed/" + config.videoIDS.TDS}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen></iframe>
			<Next to="/trusted-domain-redirection">Trusted domain redirection</Next>
		</Grid>
	</>
);
const TDR = () => (
	<>
		<Grid item xs={12} md={5}>
			<Heading>Deceptive links</Heading>
			<SubHeading>-Trusted domain redirection</SubHeading>
			<B></B>
			<P>
				My experience working as a security analyst made me come across a method
				to bypass email security and achieving trust by the user. Using the
				Google domain as your URL, you can redirect users to any website.
			</P>
			<br />
			<br />
			<P> For example:</P>
			<B
				style={{
					fontSize: "1.1rem",
					fontWeight: "bold",
					width: "100%",
					display: "block",
					margin: "0px 0px",
				}}>
				https://www.google.com/url=
				<span style={{ color: "#c22" }}>http://www.example.org</span>
			</B>
		</Grid>
		<Grid item xs={12} md={5}>
			<iframe
				width="100%"
				title="Deceptive links"
				height="300"
				style={{ marginTop: 0 }}
				src={"https://www.youtube-nocookie.com/embed/" + config.videoIDS.TDR}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen></iframe>
			<Next to="/game">Play the game</Next>
		</Grid>
	</>
);
const Nav = () => {
	return (
		<Grid item xs={12} md={2}>
			<nav id="globalNav" className="sticky">
				<SubHeading
					style={{
						color: "#222",
						fontWeight: "bold",
						fontSize: "18px",
						textTransform: "uppercase",
						lineHeight: "20px",
						marginBottom: "6px",
						borderBottom: "1px solid rgba(150,150,150,.2)",
						paddingBottom: "10px",
					}}>
					<Typography color="textPrimary" variant="h5">
						Deceptive links
					</Typography>
				</SubHeading>
				<NavLink activeClassName="selected" to="/" exact>
					<Typography color="textSecondary" component="span">
						Introduction
					</Typography>
				</NavLink>
				<NavLink activeClassName="selected" to="/typosquatting" exact>
					<Typography color="textSecondary" component="span">
						Typosquatting
					</Typography>
				</NavLink>
				<NavLink
					activeClassName="selected"
					to="/deceptive-file-extension"
					exact>
					<Typography component="span" color="textSecondary">
						Deceptive file extension
					</Typography>
				</NavLink>
				<NavLink activeClassName="selected" to="/trusted-domain-spoofing" exact>
					<Typography color="textSecondary" component="span">
						Trusted domain spoofing
					</Typography>
				</NavLink>
				<NavLink
					activeClassName="selected"
					to="/trusted-domain-redirection"
					exact>
					<Typography color="textSecondary" component="span">
						Trusted domain redirection
					</Typography>
				</NavLink>
				<NavLink activeClassName="selected" id="gameLink" to="/game" exact>
					<Typography color="textSecondary" component="span">
						Game
					</Typography>
				</NavLink>
			</nav>
		</Grid>
	);
};
const Home = () => {
	return (
		<>
			<Grid item xs={12} md={5}>
				<Heading>Deceptive links</Heading>
				<SubHeading>- Introduction</SubHeading>
				<B>Where are deceptive links actively used?</B>
				<P>
					Email is the most used platform to send or receive deceptive links,
					but other communication platforms can be used to send or receive these
					links e.g. SMS, Discord, Skype, LinkedIn, Facebook.
				</P>
				<br />
				<br />
				<B>Read more about different techniques used within deceptive links:</B>
				<br />
				<A>Typosquatting</A>
				<A>Deceptive file extension</A>
				<A>Trusted domain spoofing</A>
				<A>Game</A>
			</Grid>
			<Grid item xs={12} md={5}>
				<iframe
					width="100%"
					title="Deceptive links"
					height="300"
					style={{ marginTop: 0 }}
					src={
						"https://www.youtube-nocookie.com/embed/" +
						config.videoIDS.introduction
					}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen></iframe>
				<Next to="/typosquatting">Typosquatting</Next>
			</Grid>
		</>
	);
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Paper>
				<Container maxWidth="lg" style={{ paddingTop: "30px" }}>
					<Grid
						container
						spacing={6}
						direction="row"
						alignItems="stretch"
						alignContent="stretch">
						<Router>
							<Nav />
							<Switch basename="/">
								<Route path="/" component={Example} exact />
								<Route path="/introduction" component={Home} exact />
								<Route path="/typosquatting" component={Typosquatting} exact />
								<Route
									path="/typosquatting/motivation"
									component={Motivation}
									exact
								/>

								<Route
									path="/deceptive-file-extension"
									component={Extensions}
									exact
								/>
								<Route path="/trusted-domain-spoofing" component={TDS} exact />
								<Route
									path="/trusted-domain-redirection"
									component={TDR}
									exact
								/>
								<Route path="/game" component={Game} exact />
							</Switch>
						</Router>
					</Grid>
				</Container>
			</Paper>
		</ThemeProvider>
	);
}

export default App;
