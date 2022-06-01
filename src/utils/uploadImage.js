const uploadImage = async imageUrl => {
  const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dxebdqoxr/image/upload";
  const file = imageUrl;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "orion-spaces");
  formData.append("folder", "orion-spaces");
  try {
    const res = await fetch(cloudinaryUrl, {
      method: "POST",
      body: formData,
    });

    const { url } = await res.json();

    return url;
  } catch (err) {
    console.error(err);
  }
};
export { uploadImage };
