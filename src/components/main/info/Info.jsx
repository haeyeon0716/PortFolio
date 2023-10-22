import { useFlickrQuery } from '../../../hooks/useFlickr';
import './Info.scss';

function Info() {
	const { data, isSuccess } = useFlickrQuery({
		type: 'user',
		id: '164021883@N04',
	});
	return (
		<section className='info myScroll'>

		<h2>Info</h2>
		<hr />
		<div className="content">
			<div className="infoBox">
				<img src="img/background4.jpg" alt="1" />
			</div>
			<div className="txt">
				<h2>Our Company</h2>
					<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam officiis ipsa nobis culpa obcaecati. Nostrum sed minima accusamus asperiores magni quas optio, voluptas distinctio quisquam inventore! Nobis pariatur enim non error mollitia et rem laborum, perferendis harum nesciunt illum quibusdam dolorem commodi deleniti qui atque dolor dolore velit a!
					<br />
					<br />
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, nesciunt alias? Eos impedit aspernatur officia, quasi aliquam accusantium nesciunt dolorem!
				</span>
			</div>
		</div>
		<div className="content">
			<div className="txt">
				<h2>Our Company</h2>
					<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam officiis ipsa nobis culpa obcaecati. Nostrum sed minima accusamus asperiores magni quas optio, voluptas distinctio quisquam inventore! Nobis pariatur enim non error mollitia et rem laborum, perferendis harum nesciunt illum quibusdam dolorem commodi deleniti qui atque dolor dolore velit a!
					<br />
					<br />
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, nesciunt alias? Eos impedit aspernatur officia, quasi aliquam accusantium nesciunt dolorem!
				</span>
			</div>
			<div className="infoBox">
				<img src="img/background5.jpg" alt="1" />
			</div>
		</div>
			<div className='wrap'>
				{isSuccess &&
					data.map((pic, idx) => {
						if (idx >= 6) return null;
						return (
							<article key={idx}>
								<img
									src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_b.jpg`}
									alt={pic.title}
								/>
							</article>
						);
					})}
			</div>
		</section>
	);
}

export default Info;
