import './News.scss';
import { useState, useEffect } from 'react';

function News() {
	const dummyData = [
		{
			title: 'title4',
			content: 'Here comes content description in detail4.',
			data: new Date(),
		},
		{
			title: 'title3',
			content: 'Here comes content description in detail3.',
			data: new Date(),
		},
		{
			title: 'title2',
			content: 'Here comes content description in detail2.',
			data: new Date(),
		},
		{
			title: 'title1',
			content: 'Here comes content description in detail1.',
			data: new Date(),
		},
	];
	const getLocalData = () => {
		const data = localStorage.getItem('post');
		if (data) return JSON.parse(data);
		else return dummyData;
	};
	const [Post, setPost] = useState(getLocalData());

	useEffect(() => {
		setPost(getLocalData());
	}, []);

	return (
		<section className='news myScroll'>
			<h2>News</h2>
			<div className="txtBox">
				<h2>Lorem, ipsum.</h2>
				<span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi cum veniam voluptatibus ipsum. Excepturi voluptatibus reiciendis, nobis a dolor et.</span>
			</div>
			
			<div className='postWrap'>
				{Post.map((el, idx) => {
					if (idx >= 4) return null;
					else
						return (
							<article key={idx}>
								<h2>{el.title}</h2>
								<p>{el.content}</p>
							</article>
						);
				})}
			</div>
			<hr />
			<div className="totalBox">
				<div className="imgBox">
					<img src="img/background2.jpg" alt="1" />
				</div>
				<div className="txt">
					<h2>News</h2>
					<span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore doloremque nobis quos laboriosam laborum, corrupti consectetur incidunt debitis eveniet perspiciatis necessitatibus, enim animi aspernatur perferendis, iusto ut! Nostrum, impedit et?</span>
				</div>
			</div>
			
		</section>
	);
}

export default News;
