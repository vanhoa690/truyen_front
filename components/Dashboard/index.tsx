import { FC, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import SignIn from "./SignIn"
import { RootState } from "../../store"
const Dashboard: FC = () => {
  const { user } = useSelector((state: RootState) => state.auth)
  const { loading } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  // Check if user exists
  // useEffect(() => {
  //   dispatch(setLoading(true))
  //   const unsubscribe = firebase.auth().onAuthStateChanged(async user => {
  //     if (user) {
  //       dispatch(setLoading(true))
  //       await dispatch(getUserById(user.uid))
  //       if (!user.emailVerified) {
  //         dispatch(setNeedVerification())
  //       }
  //     }
  //     dispatch(setLoading(false))
  //   })

  //   return () => {
  //     unsubscribe()
  //   }
  // }, [dispatch])
  console.log({ user })

  return (
    <>
      <h1 className="is-size-1">Welcome {user?.firstName}</h1>
      <SignIn />
    </>
  )
}

export default Dashboard
