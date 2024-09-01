import { Comment } from "./Comment"

export function CommentSection({ comments, parent }) {
    return comments[parent].map(comment => (
        <div key={comment.id} >
            <Comment {...comment} comments={comments}/>
        </div>
    ))
}
