import { HeartIcon, ArrowUturnLeftIcon, PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { CommentSection } from './CommentSection'
import { useState } from 'react'

export function Comment({ id, name, createdAt, message, likeCount, wasLikedByMe, comments }) {

    const [replies, setReplies] = useState([])

    const res = comments.filter(comment => comment.isReplying && comment.parentId == id)
    setReplies(res)
    
    return (
        <>
            <div className='border rounded-lg p-2 w-full'>
                <div className='p-4'>
                    <div className='flex justify-between'>
                        <span> {name} </span>
                        <span> {createdAt} </span>
                    </div>
                    <div className='p-8'>
                        {message}
                    </div>
                    <div className='flex gap-2'>
                        {
                            wasLikedByMe ? (
                                <HeartIcon className="w-6" />
                            ) : (
                                <HeartIcon className="w-6 text-red" />
                            )
                        }
                        { likeCount }
                        <ArrowUturnLeftIcon className="w-6" />
                        <PencilSquareIcon className="w-6" />
                        <XCircleIcon className="w-6" />
                    </div>
                </div>
            </div>
            { replies.length > 0 && (
                <div className='pl-12'>
                    <CommentSection comments={replies} excludeReplies={false}/>
                </div>
            )}
        </>
    )
}