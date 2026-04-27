#!/bin/bash

# Test the contact API endpoint
# Run this on your VPS to test the email functionality

echo "Testing contact API endpoint..."
echo ""

curl -X POST https://prnexgen.in/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "service": "Website Development",
    "message": "This is a test message from the API test script"
  }' \
  -v

echo ""
echo ""
echo "Check the response above and PM2 logs:"
echo "pm2 logs prnxgen --lines 50"
