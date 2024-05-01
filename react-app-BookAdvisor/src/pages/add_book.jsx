import { FunctionComponent } from 'react';
import styles from './add_book.module.css';
const add_book = () => {
    return (
        <>
        <div className={styles.singUpPageParent}>
            <div className={styles.singUpPage}>
                <div className={styles.singUpPageChild} />
                <img className={styles.dalle2024030117422} alt="" src="DALL·E 2024-03-01 17.42 2.png" />
            </div>
            <div className={styles.ratingStars} />
            <b className={styles.addNewBook}>{`Add New Book `}</b>
            <div className={styles.inputField}>
                <div className={styles.bookTitleWrapper}>
                    <div className={styles.bookTitle}>Book Title</div>
                </div>
            </div>
            <div className={styles.inputField1}>
                <div className={styles.bookTitleWrapper}>
                    <div className={styles.bookTitle}>Author’s name</div>
                </div>
            </div>
            <div className={styles.inputField2}>
                <div className={styles.bookTitleWrapper}>
                    <div className={styles.bookTitle}>Location</div>
                </div>
            </div>
            <div className={styles.inputField3}>
                <div className={styles.bookTitleWrapper}>
                    <div className={styles.bookTitle}>Genres</div>
                </div>
            </div>
            <div className={styles.inputField4}>
                <div className={styles.bookTitleWrapper}>
                    <div className={styles.bookTitle}>Book Description</div>
                </div>
            </div>
            <img className={styles.img34391Icon} alt="" src="IMG_3439 1.png" />
            <div className={styles.addBookWrapper}>
                <b className={styles.addBook}>Add Book</b>
            </div>
        </div>
        </>
    );
}
export default add_book;