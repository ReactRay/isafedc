import { useState } from 'react';
import '../styles/AdminPage.scss';

const AdminPage = () => {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState('');

    const [product, setProduct] = useState({
        name: '',
        shortDesc: '',
        detailedDesc: '',
        category: '',
        price: ''
    });

    const handleCategorySubmit = (e) => {
        e.preventDefault();
        if (newCategory.trim() && !categories.includes(newCategory)) {
            setCategories([...categories, newCategory.trim()]);
            setNewCategory('');
        }
    };

    const handleProductChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleProductSubmit = (e) => {
        e.preventDefault();
        console.log('Product submitted:', product);
        // Here you can send to backend
        setProduct({
            name: '',
            shortDesc: '',
            detailedDesc: '',
            category: '',
            price: ''
        });
    };

    return (
        <div className="admin-page">
            <h2>🛠️ ניהול קטגוריות</h2>
            <form onSubmit={handleCategorySubmit} className="form">
                <input
                    type="text"
                    placeholder="הוסף קטגוריה חדשה"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                />
                <button type="submit">הוסף</button>
            </form>

            <h2>📦 הוסף מוצר חדש</h2>
            <form onSubmit={handleProductSubmit} className="form">
                <input
                    type="text"
                    name="name"
                    placeholder="שם המוצר"
                    value={product.name}
                    onChange={handleProductChange}
                />
                <input
                    type="text"
                    name="shortDesc"
                    placeholder="תיאור קצר"
                    value={product.shortDesc}
                    onChange={handleProductChange}
                />
                <textarea
                    name="detailedDesc"
                    placeholder="תיאור מפורט"
                    value={product.detailedDesc}
                    onChange={handleProductChange}
                />
                <select
                    name="category"
                    value={product.category}
                    onChange={handleProductChange}
                >
                    <option value="">בחר קטגוריה</option>
                    {categories.map((cat, idx) => (
                        <option key={idx} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
                <input
                    type="number"
                    name="price"
                    placeholder="מחיר"
                    value={product.price}
                    onChange={handleProductChange}
                />
                <button type="submit">הוסף מוצר</button>
            </form>
        </div>
    );
};

export default AdminPage;
