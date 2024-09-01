import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'
import { CommentSection } from './CommentSection'

export function Comment({ id, name, createdAt, message, comments }) {
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
                        <ArrowUturnLeftIcon className="w-6" />
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