//1.해당 페이지를 어떤식으로 작업했고 어떤 이슈가 있었는지 설명?

import Layout from '../../common/layout/Layout';
import React, { useEffect, useState } from 'react';
import './Department.scss';
const path = process.env.PUBLIC_URL;

export default function Department() {
	const [Department, setDepartment] = useState([]);
	const [History, setHistory] = useState([]);

	useEffect(() => {
		fetch(`${path}/DB/department.json`)
			.then((data) => data.json())
			.catch((err) => console.log(err))
			.then((json) => {
				setDepartment(json.members);
			})
			.catch((err) => console.log(err));

		fetch(`${path}/DB/history.json`)
			.then((data) => data.json())
			.catch((err) => console.log(err))
			.then((json) => {
				setHistory(json.history);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<Layout title={'Department'}>
			<div className="titBox">
				<h2>Lorem, ipsum.</h2>
				<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo tenetur quaerat mollitia, veritatis quos dolor animi nostrum dolore ipsam, reiciendis tempora fugiat commodi ipsa sapiente. Voluptas suscipit et ullam, repellendus perferendis magni officia odit exercitationem iusto voluptate, quo quibusdam.</span>
			</div>
			<h2>Info</h2>
			<hr />
			<div className="upper">
			<div className="imgBox"></div>
			<div id='etc'>
					<h2>Information</h2>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, id
					nesciunt? Dolores architecto quas voluptate dolorem impedit ab dolore,
					itaque blanditiis iste esse delectus libero ipsum repudiandae porro
					nulla fuga.
					<br />
					<br />
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima autem temporibus quas facilis reiciendis tempora similique quaerat quidem! Recusandae error quos optio pariatur perferendis accusantium esse rem! Reiciendis, obcaecati deleniti.
				</div>
			</div>
			<div className="upper">
			<div className="imgBox"></div>
			<div id='etc'>
					<h2>Organization</h2>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, id
					nesciunt? Dolores architecto quas voluptate dolorem impedit ab dolore,
					itaque blanditiis iste esse delectus libero ipsum repudiandae porro
					nulla fuga.
					<br />
					<br />
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima autem temporibus quas facilis reiciendis tempora similique quaerat quidem! Recusandae error quos optio pariatur perferendis accusantium esse rem! Reiciendis, obcaecati deleniti.
					<br />
					<br />
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptate perspiciatis at! Delectus, culpa. Nesciunt?
				</div>
			</div>

			<section id='historyBox'>
				<h2>History</h2>
				<div className='con'>
					{History.map((data, idx) => {
						return (
							<React.Fragment key={idx}>
								<h3>{Object.keys(data)[0]}</h3>
								<ul>
									{Object.values(data)[0].map((val, idx) => (
										<li key={idx}>{val}</li>
									))}
								</ul>
							</React.Fragment>
						);
					})}
				</div>
			</section>
			<section id='memberBox'>
				<h2>Members</h2>

				<div className='con'>
					{Department.map((member, idx) => {
						return (
							<article key={idx}>
								<div className='pic'>
									<img src={`${path}/img/${member.pic}`} alt={member.name} />
								</div>
								<h3>{member.name}</h3>
								<p>{member.position}</p>
							</article>
						);
					})}
				</div>
			</section>
		</Layout>
	);
}

//답변 - 정적인 데이터라서 굳이 fecth를 통해서 데이터를 가져오지 않고 static하게 컨텐츠를 집어넣을까 고민도 했지만 데이터기반으로 모든 화면단이 동적(dynamic)으로 생성되게 하고 싶어서 fetch를 통해서 데이터가 변경되더라도 자동으로 화면이 갱신되도록 작업을 했다.
