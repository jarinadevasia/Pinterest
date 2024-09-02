import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from 'react-bootstrap/Card';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 90,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const FormCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: '500px',
  margin: '0 auto',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const UploadCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: '500px',
  margin: '0 auto',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

function CreateImage() {
  return (
   <>
   <div>
    <div>
      <h4 className='ms-2'>Create Pin</h4>
      <hr />
    </div>
    <div> <Box sx={{ flexGrow: 1, padding: '2rem' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Item>
            <UploadCard>
              <Card.Body>
                <Card.Title>Choose a file or drag and drop it here</Card.Title>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Box sx={{ my: 4 }}>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    sx={{ margin: '0 auto', display: 'block' }}
                  >
                    Upload files
                    <VisuallyHiddenInput
                      type="file"
                      onChange={(event) => console.log(event.target.files)}
                      multiple
                    />
                  </Button>
                </Box>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Card.Subtitle className="mb-2 text-muted">
                  We recommend using high-quality jpg files less than 20MB or .mp4 files less than 200MB.
                </Card.Subtitle>
              </Card.Body>
            </UploadCard>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <FormCard>
              <Card.Body>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                      <Form.Label style={{ marginBottom: '0.5rem', display: 'block' }}>Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Title"
                        required
                        style={{ width: '100%', marginBottom: '1rem' }}
                      />
                      <Form.Label style={{ marginBottom: '0.5rem', display: 'block' }}>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Description"
                        required
                        className='mt-3'
                        style={{ width: '100%', height: '100px', marginBottom: '1rem' }}
                      />
                      <Form.Label style={{ marginBottom: '0.5rem', display: 'block' }}>Link</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Link"
                        required
                        className='mt-3'
                        style={{ width: '100%', marginBottom: '1rem' }}
                      />
                    </Form.Group>
                  </Row>
                  <Button variant='contained' type="submit" sx={{ mt: 2 }}>Add Products</Button>
                </Form>
              </Card.Body>
            </FormCard>
          </Item>
        </Grid>
      </Grid>
    </Box></div>
   </div>
   </>
  );
}

export default CreateImage;
