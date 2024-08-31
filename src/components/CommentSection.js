import { Comment } from "./Comment"

export function CommentSection({ comments, excludeReplies }) {
    if (excludeReplies) {
        return comments.map(comment => (
            !comment.isReplying ? (
                <div key={comment.id} >
                    <Comment {...comment} comments={comments}/>
                </div>
            ) : (
                <></>
            )
        ))
    }

    return comments.map(comment => (
        <div key={comment.id} >
            <Comment {...comment} comments={comments}/>
        </div>
    ))
}
