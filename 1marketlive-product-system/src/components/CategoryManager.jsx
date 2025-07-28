import React, { useState } from 'react';
import { Plus, Edit, Trash2, Tag } from 'lucide-react';

const CategoryManager = ({ categories, setCategories }) => {
  const [newCategory, setNewCategory] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory('');
    }
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setEditValue(category);
  };

  const handleSaveEdit = () => {
    if (editValue.trim() && !categories.includes(editValue.trim())) {
      const updatedCategories = categories.map(cat => 
        cat === editingCategory ? editValue.trim() : cat
      );
      setCategories(updatedCategories);
      setEditingCategory(null);
      setEditValue('');
    }
  };

  const handleDeleteCategory = (category) => {
    if (window.confirm(`Are you sure you want to delete the "${category}" category?`)) {
      setCategories(categories.filter(cat => cat !== category));
    }
  };

  const handleKeyPress = (e, action) => {
    if (e.key === 'Enter') {
      action();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Category Manager</h1>
        <p className="text-gray-600 mt-1">Organize your products with custom categories</p>
      </div>

      {/* Add New Category */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Category</h2>
        <div className="flex gap-3">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, handleAddCategory)}
            placeholder="Enter category name..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleAddCategory}
            disabled={!newCategory.trim() || categories.includes(newCategory.trim())}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Plus size={16} />
            Add Category
          </button>
        </div>
        {newCategory.trim() && categories.includes(newCategory.trim()) && (
          <p className="text-red-600 text-sm mt-2">Category already exists</p>
        )}
      </div>

      {/* Categories List */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Existing Categories ({categories.length})
        </h2>
        
        {categories.length === 0 ? (
          <div className="text-center py-12">
            <Tag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No categories yet</h3>
            <p className="text-gray-600">Add your first category to get started</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map(category => (
              <div key={category} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  {editingCategory === category ? (
                    <div className="flex-1 flex gap-2">
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onKeyPress={(e) => handleKeyPress(e, handleSaveEdit)}
                        className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        autoFocus
                      />
                      <button
                        onClick={handleSaveEdit}
                        className="px-2 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setEditingCategory(null);
                          setEditValue('');
                        }}
                        className="px-2 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Tag className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{category}</h3>
                          <p className="text-sm text-gray-500">Product category</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleEditCategory(category)}
                          className="p-1 text-gray-400 hover:text-blue-600 rounded"
                          title="Edit category"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(category)}
                          className="p-1 text-gray-400 hover:text-red-600 rounded"
                          title="Delete category"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Predefined Categories */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Add Popular Categories</h3>
        <div className="flex flex-wrap gap-2">
          {[
            'K-Beauty', 'Skincare', 'Makeup', 'Hair Care', 'Wellness', 
            'Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Books',
            'Automotive', 'Pet Supplies', 'Toys & Games', 'Health', 'Food & Beverage'
          ].filter(cat => !categories.includes(cat)).map(category => (
            <button
              key={category}
              onClick={() => {
                setCategories([...categories, category]);
              }}
              className="px-3 py-1 bg-white border border-blue-200 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors"
            >
              + {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
        <h3 className="text-sm font-semibold text-yellow-800 mb-2">💡 Tips for Category Management</h3>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Use specific categories like "K-Beauty" instead of just "Beauty" for better organization</li>
          <li>• Keep category names consistent and professional</li>
          <li>• Consider your target audience when naming categories</li>
          <li>• You can always edit or delete categories later</li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryManager;
