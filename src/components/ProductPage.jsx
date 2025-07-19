import React from "react";

/**
 * Universal Product Page Component
 * Props:
 * - title: string
 * - price: string | number
 * - images: array of image URLs
 * - description: string
 * - options: { label: string, values: string[], type: 'button' | 'color' }[]
 * - actions: { label: string, onClick: function, variant: 'primary' | 'secondary' }[]
 * - extraInfo: React node (optional)
 */
const ProductPage = ({
  title = "Sample Product Title",
  price = "$199.99",
  images = [
    "https://via.placeholder.com/400x400?text=Product+Image",
    "https://via.placeholder.com/400x400?text=Alt+Image"
  ],
  description = "This is a sample product description. It can be adjusted for any product type, such as tech, clothing, or footwear.",
  options = [
    { label: "Color", values: ["#222", "#fff", "#7a7a52"], type: "color" },
    { label: "Size", values: ["S", "M", "L", "XL", "XXL"], type: "button" }
  ],
  actions = [
    { label: "Add to Bag", onClick: () => {}, variant: "primary" },
    { label: "Add to Wish List", onClick: () => {}, variant: "secondary" }
  ],
  extraInfo = null
}) => {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [selectedOptions, setSelectedOptions] = React.useState({});

  const handleOptionSelect = (label, value) => {
    setSelectedOptions((prev) => ({ ...prev, [label]: value }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto py-8 px-4">
      {/* Sidebar: Images */}
      <div className="md:w-1/2 flex flex-col items-center">
        <div className="w-full aspect-square bg-muted rounded-lg overflow-hidden flex items-center justify-center">
          <img
            src={images[selectedImage]}
            alt={title}
            className="object-contain w-full h-full"
          />
        </div>
        {images.length > 1 && (
          <div className="flex gap-2 mt-4">
            {images.map((img, idx) => (
              <button
                key={img}
                className={`w-16 h-16 rounded border-2 ${selectedImage === idx ? 'border-primary' : 'border-border'} overflow-hidden`}
                onClick={() => setSelectedImage(idx)}
                aria-label={`View image ${idx + 1}`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="md:w-1/2 flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-semibold mb-2">{title}</h1>
          <div className="text-xl font-medium mb-4">{price}</div>
        </div>

        {/* Options */}
        {options && options.length > 0 && (
          <div className="flex flex-col gap-4 mb-4">
            {options.map((opt) => (
              <div key={opt.label}>
                <div className="mb-1 text-sm font-medium text-muted-foreground">{opt.label}:</div>
                <div className="flex gap-2 flex-wrap">
                  {opt.type === "color"
                    ? opt.values.map((val) => (
                        <button
                          key={val}
                          className={`w-8 h-8 rounded border-2 ${selectedOptions[opt.label] === val ? 'border-primary' : 'border-border'}`}
                          style={{ backgroundColor: val }}
                          onClick={() => handleOptionSelect(opt.label, val)}
                          aria-label={val}
                        />
                      ))
                    : opt.values.map((val) => (
                        <button
                          key={val}
                          className={`px-4 py-2 rounded border ${selectedOptions[opt.label] === val ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground border-border'} transition`}
                          onClick={() => handleOptionSelect(opt.label, val)}
                        >
                          {val}
                        </button>
                      ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-4 mb-4">
          {actions.map((action) => (
            <button
              key={action.label}
              onClick={action.onClick}
              className={
                action.variant === "primary"
                  ? "bg-primary text-primary-foreground px-6 py-3 rounded font-semibold hover:bg-primary/90 transition"
                  : "border border-border px-6 py-3 rounded font-semibold hover:bg-accent/50 transition"
              }
            >
              {action.label}
            </button>
          ))}
        </div>

        {/* Description */}
        <div>
          <h2 className="text-lg font-semibold mb-1">Product Description</h2>
          <p className="text-base text-muted-foreground">{description}</p>
        </div>

        {/* Extra Info (optional) */}
        {extraInfo && <div className="mt-4">{extraInfo}</div>}
      </div>
    </div>
  );
};

export default ProductPage; 