import React, { useState } from 'react';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';

function App() {
  const [image, setImage] = useState(null);
  const [matchResult, setMatchResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setLoading(true);
      setTimeout(() => {
        setMatchResult({
          name: 'John Doe',
          app: 'Tinder',
          confidence: '92%',
          profileImage: 'https://randomuser.me/api/portraits/men/75.jpg',
        });
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Partner Loyalty Checker</h1>
      <Card className="w-full max-w-md">
        <CardContent className="p-4">
          <Input type="file" accept="image/*" onChange={handleImageUpload} />
          {image && (
            <img src={image} alt="Uploaded" className="mt-4 w-32 h-32 object-cover rounded-full mx-auto" />
          )}
          {loading && <p className="text-center mt-4">Scanning databases...</p>}
          {matchResult && !loading && (
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold">Match Found on {matchResult.app}!</p>
              <img src={matchResult.profileImage} alt="Match" className="mt-2 w-32 h-32 object-cover rounded-full mx-auto" />
              <p className="mt-2">Name: {matchResult.name}</p>
              <p>Confidence: {matchResult.confidence}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;