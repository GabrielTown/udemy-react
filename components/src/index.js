import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<h4>Warning!</h4>
				Are you sure you want to do this?
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author="Sam"
					timeAgo="Today 6:00pm"
					comment="This is a comment."
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author="Alex"
					timeAgo="Today 7:10am"
					comment="You suck."
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author="Jane"
					timeAgo="Yesterday 5:33pm"
					comment="Wow, you're cool."
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));