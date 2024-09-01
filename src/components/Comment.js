import { ArrowUturnLeftIcon, PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/solid'
import { CommentSection } from './CommentSection'

export function Comment({ id, name, createdAt, message, likeCount, wasLikedByMe, comments }) {
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
                        <HeartIcon className={`w-6 + ${wasLikedByMe && "text-red-500"}`} />
                        { likeCount }
                        <ArrowUturnLeftIcon className="w-6" />
                        <PencilSquareIcon className="w-6" />
                        <XCircleIcon className="w-6" />
                    </div>
                </div>
            </div>
            { comments[id]?.length > 0 && (
                <div className='pl-12'>
                    <CommentSection comments={comments} parent={id}/>
                </div>
            )}
        </>
    )
}