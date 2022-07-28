import react from "react"
import { useState } from "react"
import "./Feedback.css"
import { useAuthContext } from "../contexts/auth";

export default function Feedback() {
  // const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [feedbackForm, setFeedbackForm] = useState({
    page: "",
    paragraph: "",
  })
  const handleOnInputChange = (event) => {
    setFeedbackForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }
  
  return (
    
    <div className="feedback">
        
        <div className="feedback-form">
          <h1 className="center-title">Feedback</h1>
            <form>
              <div className="input-field">
              <label htmlFor="page">Page You're Leaving Feedback On:</label><br/>
              <input
                className="input-bar"
                type="text"
                name="page"
                placeholder="Gameplay Screen"
                value={feedbackForm.page}
                onChange={handleOnInputChange}
              />
              <br/>
                {/* {errors.email && <span className="error">{errors.email}</span>} */}
              </div>
            </form>
            <form>
              <div className="input-field">
                <label htmlFor="paragraph">Feedback for Page:</label><br/>
                <input
                  className="paragraph"
                  type="text"
                  name="paragraph"
                  placeholder="The Gameplay Screen should be...."
                  value={feedbackForm.paragraph}
                  onChange={handleOnInputChange}
                />
                {/* {errors.password && <span className="error">{errors.password}</span>} */}
            </div>
            </form>
            

            
          
          <button  className="login-btn">Submit</button>
          
          </div>
        
    </div>
  )
}
