import { h, Component } from 'preact';

export default class Home extends Component {
	render() {
		return (
			<div class="white container center ">
				<section class="flex justify-center items-center vh-75">
					<div class="w-50 pa3">
						<p class="ba b-white pa1 dib f6 mb5">dm.</p>
						<h1 class="ma0 ttu f4">david mckoy</h1>
						<p class="f6">This is the Home component.</p>
					</div>
					<div class="black w-50 pa3">
						<p>links</p>
					</div>
				</section>
			</div>
		);
	}
}
