import { Component } from "react";



class AddLesson extends Component {

    render() {
        return (
            <div className="create-lesson">
                <h4 className="item-title">Додати урок</h4>
                <form>
                    <textarea name="editor1" id="editor1" rows="10" cols="80">
                        This is my textarea to be replaced with CKEditor 4.
                    </textarea>
                    <script>
                        CKEDITOR.replace( 'editor1' );
                    </script>
                </form>
            </div>
        )
    }

}

export default AddLesson