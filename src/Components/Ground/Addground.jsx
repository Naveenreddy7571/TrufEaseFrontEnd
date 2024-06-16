import React, { useState } from 'react';
import styles from './AddGround.module.css'

function Addground() {
    const [ground, setGround] = useState({
        name: '',
        description: '',
        width: '',
        length: '',
        height: '',
        price: '',
        image: null
    });
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setGround((prevGround) => ({
            ...prevGround,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ground);
    };

    return (
        <div className={styles.add}>
            <div className={styles.addgroundcontainer}>
                <h1 className={styles.addgroundtitle}>Add Ground</h1>
                <form className={styles.addgroundform} onSubmit={handleSubmit}>
                    <div className={styles.formgroup}>
                        <label htmlFor="name">Ground Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={ground.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor="description">Ground Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={ground.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor="width">Ground Width</label>
                        <input
                            type="text"
                            id="width"
                            name="width"
                            value={ground.width}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor="length">Ground Length</label>
                        <input
                            type="text"
                            id="length"
                            name="length"
                            value={ground.length}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor="height">Ground Height</label>
                        <input
                            type="text"
                            id="height"
                            name="height"
                            value={ground.height}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            value={ground.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor="image">Select Ground Image</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className={styles.addgroundbutton}>Add Ground</button>
                </form>
            </div>
        </div>

    );
}

export default Addground;
