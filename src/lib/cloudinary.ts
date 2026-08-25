const CLOUDINARY_CLOUD_NAME = 'xpwfqeak';
const CLOUDINARY_UPLOAD_PRESET = 'ml_default';

export interface UploadResult {
  url: string;
  publicId?: string;
  error?: string;
}

export async function uploadImageToCloudinary(file: File): Promise<UploadResult> {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok || data.error) {
      throw new Error(data.error?.message || 'Failed to upload image to Cloudinary');
    }

    return {
      url: data.secure_url || data.url,
      publicId: data.public_id,
    };
  } catch (err: any) {
    console.error('Cloudinary upload error:', err);
    return {
      url: '',
      error: err.message || 'Image upload failed',
    };
  }
}
