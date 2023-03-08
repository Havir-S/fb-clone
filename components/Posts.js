import React, { useEffect, useRef, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { db, app } from '../firebase'
import {getDocs, getFirestore, collection} from 'firebase/firestore'
import Post from './Post'

import ModalImage from "react-modal-image";

const Posts = ({posts}) => {
    const [realtimePosts] = useCollection(
        collection(db, 'posts'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );


      const [modalPic, setModalPic] = useState('https://upload.wikimedia.org/wikipedia/commons/4/45/Bill.Gates.jpg')
      const modal = useRef(null)

      const openPic = (pic) => {
        setModalPic(pic)
      }

      useEffect(() => {
        modal.current.toggleModal()
      }, [modalPic])

  return (
    <div>
      <ModalImage
                  ref={modal}
                  small={null}
                  large={modalPic}
                  alt=""
        />
      {
      realtimePosts 
      ? realtimePosts?.docs.reverse().map(post => (
        <Post
            openPic={() => {openPic(post.data().postImage)}}
            key={post.id}
            name={post.data().name}
            message={post.data().message}
            email={post.data().email}
            timestamp={post.data().timestamp}
            image={post.data().image}
            postImage={post.data().postImage}

          />
    )) 
    : posts.map(post => (
        <Post
            key={post.id}
            name={post.name}
            message={post.message}
            email={post.email}
            timestamp={post.timestamp}
            image={post.image}
            postImage={post.postImage}

          />
    ))
    }
    </div>
  )
}

export default Posts