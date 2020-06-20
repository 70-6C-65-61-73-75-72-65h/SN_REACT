import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { requiredField, maxLength30 } from '../../../utils/validators/validators';
import { TextArea } from '../../common/FormsControls/FormsControls';


const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}> {/* + к этому контейнерная компонента  вызывает props.onSubmit*/}
            <div className=''>
                <Field placeholder={'Write your post'} name={"newPostText"} component={TextArea} validate={[requiredField, maxLength30]}/>
            </div>
            <div className=''>
                <button>Add post</button>
            </div>
        </form>
    )
}
// a unique name for the form
const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)




const MyPosts = (props) => {

    const onAddPost = (formData) => {
        // console.log(formData);
        props.addPost(formData.newPostText);
    }

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;



//     // let newPostElement = React.createRef();

//     // let onAddPost = () => {
//     //     props.addPost();
//     // }

//     // let onPostChange = (e) => {
//     //     // let text = newPostElement.current.value;
//     //     // props.updateNewPostText(text);
//     //     let text = e.target.value;
//     //     props.updateNewPostText(text);
//     // }

// <div>
//     <div>
//         <textarea onChange={onPostChange}
//             value={props.newPostText} />
//     </div>
//     <div>
//         <button onClick={onAddPost}>Add post</button>
//     </div>
// </div> 